import { Event } from "../utils/validations";
import {
  addDoc,
  DocumentData,
  getDocs,
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
    const q = query(eventCollection, where("event.visibility", "==", PUBLIC));
    const docs = await getDocs(q);
    const events: DocumentData[] = [];
    docs.forEach((doc) => events.push(doc.data().event));
    return events;
  } catch (error) {
    console.error("Error retrieving all public events:", error);
  }
};

export { addEvent, getAllPublicEvent };
