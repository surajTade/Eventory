import firebase from "firebase/compat/app";
import { User } from "../utils/validations";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";

const addUser = async (user: User) => {
  try {
    const db = getFirestore(app);
    const userCollection = collection(db, "users");

    await addDoc(userCollection, {
      userId: user.userId,
      email: user.email,
      displayName: user.displayName,
      profilePicture: user.profilePicture || null,
      phoneNumber: user.phoneNumber || null,
      registeredEvents: [],
      createdEvents: [],
      notificationsEnabled: true,
      role: "user",
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLogin: firebase.firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

export { addUser };
