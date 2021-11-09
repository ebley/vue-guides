// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import { getAuth } from "@firebase/auth";
import {getDatabase, ref} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD90fKJBI4C_hBJnh6ua5iNul1ZflTTW3A",
  authDomain: "turnout-f777f.firebaseapp.com",
  projectId: "turnout-f777f",
  storageBucket: "turnout-f777f.appspot.com",
  messagingSenderId: "207547648905",
  appId: "1:207547648905:web:5276fba2da30ef68da2f58",
  measurementId: "G-DNDWW7K0FY"
};





// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db =  getDatabase(firebaseApp);
export const reff =  ref(db);

//export const analytics = getAnalytics(app);