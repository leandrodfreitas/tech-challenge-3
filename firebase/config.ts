import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "tech-challenge-3-9f1ee.firebaseapp.com",
  projectId: "tech-challenge-3-9f1ee",
  storageBucket: "tech-challenge-3-9f1ee.firebasestorage.app",
  messagingSenderId: "855400261531",
  appId: "1:855400261531:web:c0e93d5da639ca250da33e"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

export default app;
