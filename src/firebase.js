import firebase from "firebase";

const firbaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvKGMb0SXg-UtCHNabCbbojI01ZRw_rrY",
  authDomain: "massenger-clone.firebaseapp.com",
  databaseURL: "https://massenger-clone.firebaseio.com",
  projectId: "massenger-clone",
  storageBucket: "massenger-clone.appspot.com",
  messagingSenderId: "40840280403",
  appId: "1:40840280403:web:4903a7948f173e702989a6",
  measurementId: "G-MYDWVGVLHE",
});

const db = firebase.firestore();

export { db };
