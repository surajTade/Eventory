import { array, boolean, date, InferType, number, object, string } from "yup";
import { INVITE_ONLY, PRIVATE, PUBLIC } from "./constants";

const userSchema = object({
  userId: string().required(),
  email: string().email().required(),
  displayName: string().required(),
  profilePicture: string().url().nullable(),
  phoneNumber: string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .nullable(),
  registeredEvents: array(string()).nullable(),
  createdEvents: array(string()).nullable(),
  notificationsEnabled: boolean().default(true),
  role: string().default("user"),
  createdAt: date().default(() => new Date()),
  lastLogin: date().default(() => new Date()),
});

const eventSchema = object({
  eventId: string().required(),
  title: string().required(),
  description: string().required(),
  eventType: string().required(), // e.g., "music", "conference", etc.
  organizerId: string().required(), // The userId of the event creator

  isOnline: boolean().default(false), // Indicates if the event is online

  // Location can be a Google Maps link or a location object
  location: string()
    .url()
    .when("isOnline", {
      //@ts-ignore
      is: false, // If the event is not online, expect a location link
      then: string().required("Location is required for offline events."),
      otherwise: string().url().nullable(), // Allow for a URL for online events
    }),

  startDate: date().required(),
  endDate: date()
    //@ts-ignore
    // .min(date().ref("startDate"), "End date cannot be before start date")
    .required(), // Ensures endDate is after startDate

  isFree: boolean().default(true), // If true, price is not required

  price: number()
    .nullable()
    .when("isFree", {
      //@ts-ignore
      is: false, // If the event is not free, require a positive price
      then: number().required().positive("Price must be positive"),
      otherwise: number().nullable(),
    }),

  capacity: number().positive().integer().nullable(), // Max attendees (optional)

  attendees: array(string()).nullable(), // Attendee userIds
  attendeesCount: number().integer().default(0), // Default 0 attendees

  createdAt: date().default(() => new Date()), // Creation timestamp
  updatedAt: date().default(() => new Date()), // Update timestamp

  visibility: string().oneOf([PUBLIC, PRIVATE, INVITE_ONLY]).default(PUBLIC), // Default public event
  eventImage: string().url().nullable(), // Optional image URL
});

type User = InferType<typeof userSchema>;
type Event = InferType<typeof eventSchema>;

export { userSchema, eventSchema };
export type { User, Event };
