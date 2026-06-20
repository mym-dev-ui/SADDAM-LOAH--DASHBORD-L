// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // Paste config here
  apiKey: "AIzaSyDBbLp4bZybcrkwVOZqD4-H34AVMHVNpxc",
  authDomain: "tameenbecer-m.firebaseapp.com",
  databaseURL: "https://tameenbecer-m-default-rtdb.firebaseio.com",
  projectId: "tameenbecer-m",
  storageBucket: "tameenbecer-m.firebasestorage.app",
  messagingSenderId: "351037299340",
  appId: "1:351037299340:web:e68887a4b7c1a5348379a9",
  measurementId: "G-C7R2BP83C8"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
