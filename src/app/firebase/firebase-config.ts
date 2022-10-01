// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Lz8aqipfpSuIgHXh1TlUhDYN1JsSTro",
  authDomain: "fpt-food-1018c.firebaseapp.com",
  projectId: "fpt-food-1018c",
  storageBucket: "fpt-food-1018c.appspot.com",
  messagingSenderId: "425639494431",
  appId: "1:425639494431:web:6db79db186f7b49404a62a",
  measurementId: "G-BRHJ7CHQ8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);