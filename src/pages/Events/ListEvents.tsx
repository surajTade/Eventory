import { useEffect, useState } from "react";
import { getAllPublicEvent } from "../../db/eventManager";
import { DocumentData } from "firebase/firestore";
import EventCard from "../../components/event/EventCard";

const ListEvents = () => {
  const [events, setEvents] = useState<DocumentData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getAllPublicEvent();
      if (data == null) {
        console.log("No events found");
        return;
      }
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="">
      <p className="text-center text-4xl my-6 mb-12 font-extrabold">
        PUBLIC EVENTS
      </p>
      <div className="ml-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-12">
        {events.map((event) => (
          <EventCard
            key={event.eventId}
            name={event.title}
            description={event.description}
            isOnline={event.isOnline}
            date={new Date(event.startDate.seconds)}
          />
        ))}
      </div>
    </div>
  );
};

export default ListEvents;
