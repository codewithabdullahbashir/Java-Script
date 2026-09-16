import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4J1_B7W5V0QgXEKWsQ-xnj8pesaSSnzM",
  authDomain: "js-app-dd896.firebaseapp.com",
  projectId: "js-app-dd896",
  storageBucket: "js-app-dd896.firebasestorage.app",
  messagingSenderId: "808645207023",
  appId: "1:808645207023:web:a60f3d3e94b85ffebf8c1a",
  measurementId: "G-Z8JY4NF78R",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);
