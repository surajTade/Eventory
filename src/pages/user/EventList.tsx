import { DocumentData } from "firebase/firestore";
import EventsLoader from "../../components/EventsLoader";
import { Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventList = ({
  loading,
  events,
  handleDelete,
}: {
  loading: boolean;
  events: DocumentData[];
  handleDelete: (eventId: string) => {};
}) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {loading ? (
        <EventsLoader />
      ) : (
        events.map((event: DocumentData) => (
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
                  onClick={() => handleDelete(event.id)}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
