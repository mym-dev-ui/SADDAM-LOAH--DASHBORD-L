// firebase.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  // Paste config here
NEXT_PUBLIC_FIREBASE_API_KEY=TEMP_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=TEMP.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=TEMP_PROJECT
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=TEMP.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=000000000
NEXT_PUBLIC_FIREBASE_APP_ID=1:000000:web:temp

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { auth, db, database };
