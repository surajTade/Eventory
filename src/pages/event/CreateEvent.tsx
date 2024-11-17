import { Event } from "../../utils/validations";
import { addEvent } from "../../db/eventManager";
import { useUser } from "../../Context/UserContext";
import { INVITE_ONLY, PRIVATE, PUBLIC } from "../../utils/constants";
import Notification from "../../components/Notifications/NotificationContainer";
import EventForm from "../../components/event/EventForm";

const CreateEvent = () => {
  const { user } = useUser();

  const initialValues = {
    organizerId: "0",
    title: "",
    description: "",
    eventType: "",
    isOnline: true,
    location: "http://defaultloc.com",
    startDate: "",
    endDate: "",
    isFree: true,
    price: 10,
    capacity: 10,
    eventImage: "http://defaultimage.com",
    visibility: PUBLIC,
    deleted: false,
  };

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
        Add Event
      </h1>
      <EventForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateEvent;
