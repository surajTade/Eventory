import { useEffect, useState } from "react";
import { getAllPublicEvent } from "../../db/eventManager";
import { DocumentData } from "firebase/firestore";
import { Image } from "lucide-react";

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
      All PUBLIC EVENTS
      <ul className="w-full">
        {events.map((event) => (
          <li className="border-b border-b-slate-400" key={event.eventId}>
            <span>{event.title}</span>
            <p>{event.description}</p>
            <img src={event.eventImage} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListEvents;
