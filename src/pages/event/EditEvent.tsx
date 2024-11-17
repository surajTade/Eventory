import { Event } from "../../utils/validations";
import { addEvent, getSpecificEvent } from "../../db/eventManager";
import { useUser } from "../../Context/UserContext";
import { INVITE_ONLY, PRIVATE, PUBLIC } from "../../utils/constants";
import Notification from "../../components/Notifications/NotificationContainer";
import EventForm from "../../components/event/EventForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const { user } = useUser();
  const [initialValues, setInitialValues] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!id) return;
        const event = await getSpecificEvent(id);

        setInitialValues({
          ...event,
          startDate: new Date(event.startDate.seconds * 1000)
            .toISOString()
            .slice(0, 16),
          endDate: new Date(event.endDate.seconds * 1000)
            .toISOString()
            .slice(0, 16),
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        Notification.error("Failed to load event details.");
      }
    };

    fetchEvent();
  }, [id]);

  const handleSubmit = async (values: Event) => {
    try {
      const date = new Date();
      const createEventValues: Event = {
        ...values,
        organizerId: user!.uid,
        attendeesCount: 0,
        createdAt: date,
        updatedAt: date,
        startDate: new Date(values.startDate),
        endDate: new Date(values.endDate),
        visibility:
          values.visibility === PUBLIC
            ? PUBLIC
            : values.visibility === PRIVATE
            ? PRIVATE
            : INVITE_ONLY,
      };

      await addEvent(createEventValues);
      Notification.success("Event added successfully");
    } catch (error) {
      console.error("Error adding event:", error);
      Notification.error("Failed to add event. Please try again.");
    }
  };

  return (
    <div className="mt-6 mx-auto p-6 bg-white border w-full rounded shadow-md">
      <h1 className="text-3xl text-center uppercase font-bold mb-4">
        Edit Event
      </h1>
      {loading ? (
        <>Loading...</>
      ) : (
        <EventForm initialValues={initialValues} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default EditEvent;
