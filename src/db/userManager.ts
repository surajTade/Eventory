import firebase from "firebase/compat/app";
import { User } from "../utils/validations";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

const addUser = async (user: User) => {
  try {
    console.log("here");

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
