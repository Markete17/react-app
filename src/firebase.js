import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDIfxl4LudWkIfhHu9QYLy2bnllOd6BPmY",
  authDomain: "react-app-d34e5.firebaseapp.com",
  projectId: "react-app-d34e5",
  storageBucket: "react-app-d34e5.appspot.com",
  messagingSenderId: "760697112956",
  appId: "1:760697112956:web:e6bc837d67622c3dd47cf9",
  measurementId: "G-VZ3L159RSQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase}