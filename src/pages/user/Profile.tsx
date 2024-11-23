import { useUser } from "../../Context/UserContext";
import { useUserEvents } from "../../hooks/User";
import EventList from "./EventList";

const Profile = () => {
  const { user } = useUser();
  const { events, loading, deleteEvent } = useUserEvents(user!.uid);

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mx-auto mt-12">
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
        <EventList
          loading={loading}
          events={events}
          handleDelete={deleteEvent}
        />
      </div>
    </div>
  );
};

export default Profile;
