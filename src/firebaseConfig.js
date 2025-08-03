// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCsSqj657OgH9nZJqjswkXqibCx4JVVCB8",
authDomain: "linkedinclone-17ce9.firebaseapp.com",
projectId: "linkedinclone-17ce9",
storageBucket: "linkedinclone-17ce9.firebasestorage.app",
messagingSenderId: "543232350118",
appId: "1:543232350118:web:375e5f601bdac69c986167"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage
    
 };
