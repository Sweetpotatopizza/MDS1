// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzVqZQxs1u-23TmdsbVRKA_8s2Yt3Eap4",
  authDomain: "inspiring-bonus-273615.firebaseapp.com",
  databaseURL: "https://inspiring-bonus-273615.firebaseio.com",
  projectId: "inspiring-bonus-273615",
  storageBucket: "inspiring-bonus-273615.appspot.com",
  messagingSenderId: "248785035801",
  appId: "1:248785035801:web:b89002adec151170320088",
  measurementId: "G-2PV84V8DHH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
