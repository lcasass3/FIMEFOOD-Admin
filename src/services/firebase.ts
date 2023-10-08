// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3o4SO3tCKXL5MQ2hF4DdrBZd1JzTHsXg",
  authDomain: "fimefood-49448.firebaseapp.com",
  projectId: "fimefood-49448",
  storageBucket: "fimefood-49448.appspot.com",
  messagingSenderId: "2895470563",
  appId: "1:2895470563:web:e4ee471750176136058ad6",
  measurementId: "G-CDGPQWM5HZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app);