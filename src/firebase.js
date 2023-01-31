// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm2tppdqe0idkoLbOVP7dlqjMnBW-Wzvo",
  authDomain: "mk-resturent.firebaseapp.com",
  projectId: "mk-resturent",
  storageBucket: "mk-resturent.appspot.com",
  messagingSenderId: "1098032702284",
  appId: "1:1098032702284:web:6d78041d6e8c68d22765e9",
  measurementId: "G-67J25C03BL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
