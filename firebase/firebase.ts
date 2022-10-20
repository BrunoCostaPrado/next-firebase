// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKqOq7xlffEN-IKDH5rVHmBhrUb8TAZ70",
  authDomain: "next-firebase-fc343.firebaseapp.com",
  projectId: "next-firebase-fc343",
  storageBucket: "next-firebase-fc343.appspot.com",
  messagingSenderId: "386336374424",
  appId: "1:386336374424:web:5fd15518de415ffa0a1aed",
  measurementId: "G-YQQDQ24QH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
