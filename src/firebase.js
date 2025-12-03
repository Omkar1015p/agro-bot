// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8OaoUntXYnxEa2jzR_I0URulPZBgNFCw",
  authDomain: "agro-bot-f052c.firebaseapp.com",
  projectId: "agro-bot-f052c",
  storageBucket: "agro-bot-f052c.firebasestorage.app",
  messagingSenderId: "105680122090",
  appId: "1:105680122090:web:e1204a14aba59230d8a793",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
