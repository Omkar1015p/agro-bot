import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC8OaoUntXYnxEa2jzR_I0URulPZBgNFCw",
  authDomain: "agro-bot-f052c.firebaseapp.com",
  databaseURL: "https://agro-bot-f052c-default-rtdb.firebaseio.com/",
  projectId: "agro-bot-f052c",
  storageBucket: "agro-bot-f052c.firebasestorage.app",
  messagingSenderId: "105680122090",
  appId: "1:105680122090:web:e1204a14aba59230d8a793",
};

const app = initializeApp(firebaseConfig);

// ✅ Realtime Database instance
export const db = getDatabase(app);
