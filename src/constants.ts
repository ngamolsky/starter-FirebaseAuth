export const APP_NAME = "FirebaseAuthStarter";

export const __prod__ = process.env.NODE_ENV === "production";

export const MIN_PASSWORD_LENGTH = 6;

export const USERS_COLLECTION = "users";

export const BASE_URL = __prod__
  ? "https://firebase-auth-starter.vercel.app"
  : "http://localhost:3000";
