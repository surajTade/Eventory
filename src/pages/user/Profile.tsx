import { useEffect, useState } from "react";
import { useUser } from "../../Context/UserContext";
import {
  getUserCreatedEvents,
  setEvenetAsDeleted,
} from "../../db/eventManager";
import { DocumentData } from "firebase/firestore";
import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EventsLoader from "../../components/EventsLoader";
import Notification from "../../components/Notifications/NotificationContainer";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [events, setEvents] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await getUserCreatedEvents(user.uid);
      if (data == null) {
        console.log("No events found");
        setEvents([]);
      } else {
        setEvents(data);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      Notification.error("Failed to load events.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDeleteEvent = async (eventId: string) => {
    try {
      await setEvenetAsDeleted(eventId);
      Notification.success("Event deleted successfully");
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      Notification.error("Failed to delete event. Please try again.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-auto mt-12">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src={`${user?.photoURL}`}
            alt={`${user?.displayName}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold">{user?.displayName}</h2>
          <p className="text-gray-600">Events Created: {events.length}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Your Events</h3>
        <div className="space-y-4">
          {loading ? (
            <EventsLoader />
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-4 border rounded-md"
              >
                <div>
                  <h4 className="text-md font-medium">{event.title}</h4>
                  <p className="text-sm text-gray-500">
                    {new Date(event.createdAt.seconds * 1000)
                      .toString()
                      .slice(0, 16)}
                  </p>
                </div>
                {event.deleted ? (
                  <div className="text-red-600">DELETED</div>
                ) : (
                  <div className="flex gap-4">
                    <Edit
                      size={18}
                      color="DodgerBlue"
                      className="cursor-pointer"
                      onClick={() => navigate("/events/edit/" + event.id)}
                    />

                    <Trash
                      size={18}
                      color="red"
                      className="cursor-pointer"
                      onClick={() => handleDeleteEvent(event.id)}
                    />
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
