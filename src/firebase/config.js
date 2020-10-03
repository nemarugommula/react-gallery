import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBAoOXs9S55XZsdycRmCGQG1bOvyhAhMsk",
  authDomain: "react-6ec56.firebaseapp.com",
  databaseURL: "https://react-6ec56.firebaseio.com",
  projectId: "react-6ec56",
  storageBucket: "react-6ec56.appspot.com",
  messagingSenderId: "3668358875",
  appId: "1:3668358875:web:49c94db60156d8c5b57efe",
  measurementId: "G-KEDSVZGBKJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timeStamp = firebase.firestore.FieldValue.serverTimestamp;
