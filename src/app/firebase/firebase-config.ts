
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

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
export const db = getFirestore(app);
export const auth = getAuth(app);