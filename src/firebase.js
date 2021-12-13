import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXEkKFe__Iynky7O7kZGTGQ95Ib7HB6HQ",
  authDomain: "cloneyyy-b86ec.firebaseapp.com",
  projectId: "cloneyyy-b86ec",
  storageBucket: "cloneyyy-b86ec.appspot.com",
  messagingSenderId: "455766932957",
  appId: "1:455766932957:web:73ed6de541c57f33f8ca34",
  measurementId: "${config.measurementId}",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
