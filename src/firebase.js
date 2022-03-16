// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9MUVkCQhwLI47tkA7lAKyEzzezUpyOco",
  authDomain: "dennis-127e8.firebaseapp.com",
  projectId: "dennis-127e8",
  storageBucket: "dennis-127e8.appspot.com",
  messagingSenderId: "108674276622",
  appId: "1:108674276622:web:e34c08a30672021225cb5f",
  measurementId: "G-H1H31DJ6B2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
