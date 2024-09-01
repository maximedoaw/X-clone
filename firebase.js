// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "uploadingfile-b2ff9.firebaseapp.com",
  projectId: "uploadingfile-b2ff9",
  storageBucket: "uploadingfile-b2ff9.appspot.com",
  messagingSenderId: "786954828573",
  appId: "1:786954828573:web:cc605203eaf1989e85fff4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
