import { INVITE_ONLY, PRIVATE, PUBLIC } from "./constants";

type EVENT_TYPE = typeof PUBLIC | typeof PRIVATE | typeof INVITE_ONLY;

export type { EVENT_TYPE };
