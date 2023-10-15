// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-f51a7.firebaseapp.com",
  projectId: "mern-realestate-f51a7",
  storageBucket: "mern-realestate-f51a7.appspot.com",
  messagingSenderId: "225129755518",
  appId: "1:225129755518:web:5df925e2560072b2cbb92f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);