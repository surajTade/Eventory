import { Event } from "../utils/validations";
import {
  addDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { eventCollection } from "./firebase";
import { PUBLIC } from "../utils/constants";

const addEvent = async (event: Event) => {
  try {
    await addDoc(eventCollection, {
      event,
    });
  } catch (error) {
    console.error("Error adding event: ", error);
  }
};

const getAllPublicEvent = async () => {
  try {
    const currentDate = new Date();

    const q = query(
      eventCollection,
      where("event.visibility", "==", PUBLIC),
      where("event.endDate", ">=", currentDate)
    );
    const docs = await getDocs(q);
    const events: DocumentData[] = [];
    docs.forEach((doc) => events.push({ ...doc.data().event, id: doc.id }));
    return events;
  } catch (error) {
    console.error("Error retrieving all public events:", error);
  }
};

const getUserCreatedEvents = async (userId: string) => {
  try {
    const q = query(
      eventCollection,
      where("event.organizerId", "==", userId),
      orderBy("event.createdAt", "desc")
    );

    const docs = await getDocs(q);
    const events: DocumentData[] = [];
    docs.forEach((doc) => events.push({ ...doc.data().event, id: doc.id }));
    return events;
  } catch (error) {
    console.error("Error retrieving user created events:", error);
  }
};

const getSpecificEvent = async (eventId: string) => {
  try {
    const docref = doc(eventCollection, eventId);
    const data = (await getDoc(docref)).data();
    if (!data) return null;

    return data.event;
  } catch (error) {
    console.error("Error retrieving user created events:", error);
  }
};

export { addEvent, getAllPublicEvent, getUserCreatedEvents, getSpecificEvent };
