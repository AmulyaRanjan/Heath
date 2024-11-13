import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDBFlrGEDncdpURg5WtaQTO3h0iZqUsxQY",
  authDomain: "health-21392.firebaseapp.com",
  projectId: "health-21392",
  storageBucket: "health-21392.firebasestorage.app",
  messagingSenderId: "391267333177",
  appId: "1:391267333177:web:7af1ef085facc5d32689e8"
 
};

const app = initializeApp(firebaseConfig);

// Get Firebase Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };