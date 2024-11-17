import { INVITE_ONLY, PRIVATE, PUBLIC } from "../utils/constants";
import { addEvent } from "./eventManager";

const seedEvents = async () => {
  await addEvent({
    title: "Jazz Night",
    description: "An evening of soulful jazz music with local artists.",
    eventType: "music",
    organizerId: "user123",
    isOnline: false,
    location: "https://maps.google.com/?q=Jazz+Club+Downtown",
    startDate: new Date("2024-11-01T19:00:00Z"),
    endDate: new Date("2024-11-01T22:00:00Z"),
    isFree: false,
    price: 20,
    capacity: 100,
    attendees: ["user456", "user789"],
    attendeesCount: 2,
    createdAt: new Date("2024-10-17T12:00:00Z"),
    updatedAt: new Date("2024-10-17T12:00:00Z"),
    visibility: PUBLIC,
    eventImage: "https://example.com/images/jazz-night.jpg",
  });

  await addEvent({
    title: "Tech Conference 2024",
    description:
      "Join us for the annual Tech Conference featuring industry leaders.",
    eventType: "conference",
    organizerId: "user234",
    isOnline: true,
    location: "https://zoom.us/j/123456789",
    startDate: new Date("2024-11-15T09:00:00Z"),
    endDate: new Date("2024-11-15T17:00:00Z"),
    isFree: true,
    price: null,
    capacity: 500,
    attendees: null,
    attendeesCount: 0,
    createdAt: new Date("2024-10-18T09:00:00Z"),
    updatedAt: new Date("2024-10-18T09:00:00Z"),
    visibility: PUBLIC,
    eventImage: null,
  });

  await addEvent({
    title: "Cooking Workshop",
    description: "Learn to cook Italian dishes with Chef Luigi.",
    eventType: "workshop",
    organizerId: "user345",
    isOnline: false,
    location: "https://maps.google.com/?q=Cooking+School+Uptown",
    startDate: new Date("2024-11-20T10:00:00Z"),
    endDate: new Date("2024-11-20T13:00:00Z"),
    isFree: false,
    price: 50,
    capacity: 20,
    attendees: null,
    attendeesCount: 0,
    createdAt: new Date("2024-10-19T10:00:00Z"),
    updatedAt: new Date("2024-10-19T10:00:00Z"),
    visibility: PRIVATE,
    eventImage: "https://example.com/images/cooking-workshop.jpg",
  });

  await addEvent({
    title: "Charity Run",
    description: "Participate in a charity run to support local shelters.",
    eventType: "sport",
    organizerId: "user456",
    isOnline: false,
    location: "https://maps.google.com/?q=City+Park",
    startDate: new Date("2024-12-01T08:00:00Z"),
    endDate: new Date("2024-12-01T12:00:00Z"),
    isFree: true,
    price: null,
    capacity: 300,
    attendees: null,
    attendeesCount: 0,
    createdAt: new Date("2024-10-20T08:00:00Z"),
    updatedAt: new Date("2024-10-20T08:00:00Z"),
    visibility: PUBLIC,
    eventImage: "https://example.com/images/charity-run.jpg",
  });

  await addEvent({
    title: "Photography Exhibition",
    description: "Explore stunning photography from local artists.",
    eventType: "exhibition",
    organizerId: "user567",
    isOnline: false,
    location: "https://maps.google.com/?q=Art+Gallery+Downtown",
    startDate: new Date("2024-11-30T18:00:00Z"),
    endDate: new Date("2024-11-30T21:00:00Z"),
    isFree: false,
    price: 15,
    capacity: 150,
    attendees: null,
    attendeesCount: 0,
    createdAt: new Date("2024-10-21T14:00:00Z"),
    updatedAt: new Date("2024-10-21T14:00:00Z"),
    visibility: INVITE_ONLY,
    eventImage: null,
  });

  await addEvent({
    title: "Yoga Retreat",
    description: "A weekend retreat focusing on mindfulness and wellness.",
    eventType: "retreat",
    organizerId: "user678",
    isOnline: false,
    location: "https://maps.google.com/?q=Wellness+Center+Hilltop",
    startDate: new Date("2025-01-10T09:00:00Z"),
    endDate: new Date("2025-01-12T17:00:00Z"),
    isFree: false,
    price: 200,
    capacity: 30,
    attendees: null,
    attendeesCount: 0,
    createdAt: new Date("2024-10-22T10:00:00Z"),
    updatedAt: new Date("2024-10-22T10:00:00Z"),
    visibility: PRIVATE,
    eventImage: "https://example.com/images/yoga-retreat.jpg",
  });
};

export { seedEvents };
