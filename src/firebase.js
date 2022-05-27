import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqKeSf5WYsnB8i4VbFeaakRaDNXFhZrfY",
  authDomain: "challenge-78fda.firebaseapp.com",
  projectId: "challenge-78fda",
  storageBucket: "challenge-78fda.appspot.com",
  messagingSenderId: "88543556834",
  appId: "1:88543556834:web:0c77046600fbfdb7001abb",
  measurementId: "G-LZGQC1RJ8L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };
