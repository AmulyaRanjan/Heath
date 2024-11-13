import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAd59U66q4mU47kabRHIUXWWWHC7J7v74k",
  authDomain: "healthcare-services-cd771.firebaseapp.com",
  projectId: "healthcare-services-cd771",
  storageBucket: "healthcare-services-cd771.firebasestorage.app",
  messagingSenderId: "1021238146675",
  appId: "1:1021238146675:web:d4dcb00c4bcc90053bdc06"
};

const app = initializeApp(firebaseConfig);

// Get Firebase Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };