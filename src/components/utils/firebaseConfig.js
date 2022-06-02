import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCF98eKjex5Ai5K4cB-HAGWMFpJr3hdUgA",
    authDomain: "king-of-gaming---31175.firebaseapp.com",
    projectId: "king-of-gaming---31175",
    storageBucket: "king-of-gaming---31175.appspot.com",
    messagingSenderId: "945426934508",
    appId: "1:945426934508:web:7f9bd54196ebeee289d3c9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);