import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyzEMieDTst50aNOErOujrcna4WP7Z_aA",
    authDomain: "clone-5ce50.firebaseapp.com",
    projectId: "clone-5ce50",
    storageBucket: "clone-5ce50.firebasestorage.app",
    messagingSenderId: "829591999756",
    appId: "1:829591999756:web:4a048049b3440eb36a2529",
    measurementId: "G-J5VKQFME47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

