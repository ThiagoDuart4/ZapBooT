// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBv6LaL8FYWZ7jwCe5Dj6JGCdK1dskX5Aw",
  authDomain: "zapbot-e1c4b.firebaseapp.com",
  projectId: "zapbot-e1c4b",
  storageBucket: "zapbot-e1c4b.appspot.com",
  messagingSenderId: "643664996268",
  appId: "1:643664996268:web:5e1f1d357a8ab385837c09",
  measurementId: "G-WY8B6F4FVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;