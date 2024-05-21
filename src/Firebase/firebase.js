import firebase from "firebase/compat/app"
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBWubwR2smKQIwbrPQhmwbQaE5NEEJ2kTk",
    authDomain: "netflix-account-b4623.firebaseapp.com",
    projectId: "netflix-account-b4623",
    storageBucket: "netflix-account-b4623.appspot.com",
    messagingSenderId: "1072813356925",
    appId: "1:1072813356925:web:25643d9b8ada9fab8d3e14",
    measurementId: "G-NRPRRYX1K6"
  };
export const Firebase = firebase.initializeApp(firebaseConfig)