// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-a824d.firebaseapp.com",
  projectId: "x-next-a824d",
  storageBucket: "x-next-a824d.appspot.com",
  messagingSenderId: "141144040243",
  appId: "1:141144040243:web:e9fa7678a85744691e5446",
  measurementId: "G-MRQT2VTDGJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
