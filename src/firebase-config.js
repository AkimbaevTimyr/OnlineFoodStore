import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB06PGQva6XzCzXJ7bLzX1Qy_9gLAnEckM",
    authDomain: "onlinefoodstore-f3c07.firebaseapp.com",
    projectId: "onlinefoodstore-f3c07",
    storageBucket: "onlinefoodstore-f3c07.appspot.com",
    messagingSenderId: "683771246213",
    appId: "1:683771246213:web:1d3801358a308c60f0dbec"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
export const authentication = getAuth(app);