// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "mcg-web.firebaseapp.com",
  projectId: "mcg-web",
  storageBucket: "mcg-web.appspot.com",
  messagingSenderId: "754980256450",
  appId: "1:754980256450:web:968d6473d17e4d0458d95b",
  measurementId: "G-LYSB8LF3Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);