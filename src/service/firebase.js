import firebase from "firebase/app";
import 'firebase/database';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
console.log(firebase);
// Initialize Firebase
console.log(initializeApp);
const firebaseApp = initializeApp(firebaseConfig);

export const firebaseDatabase = firebaseApp.database();


