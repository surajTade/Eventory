import { useState, useEffect } from "react";
import { getUserCreatedEvents, setEvenetAsDeleted } from "../db/eventManager";
import Notification from "../components/Notifications/NotificationContainer";
import { DocumentData } from "firebase/firestore";

export const useUserEvents = (userId: string) => {
  const [events, setEvents] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    if (!userId) return;
    setLoading(true);
    try {
      const data = await getUserCreatedEvents(userId);
      if (!data) return;

      setEvents(
        (data || []).sort((a, b) => {
          return (a.deleted ? 1 : 0) - (b.deleted ? 1 : 0);
        })
      );
    } catch (error) {
      console.error("Error fetching events:", error);
      Notification.error("Failed to load events.");
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (eventId: string) => {
    try {
      await setEvenetAsDeleted(eventId);
      Notification.success("Event deleted successfully.");
    } catch (error) {
      console.error("Error deleting event:", error);
      Notification.error("Failed to delete event. Please try again.");
    }
    fetchEvents();
  };

  useEffect(() => {
    fetchEvents();
  }, [userId]);

  return { events, loading, fetchEvents, deleteEvent };
};
