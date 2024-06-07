

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-f47ef.firebaseapp.com",
  projectId: "mern-auth-f47ef",
  storageBucket: "mern-auth-f47ef.appspot.com",
  messagingSenderId: "838706484912",
  appId: "1:838706484912:web:f62e6058610b66b5984d75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);