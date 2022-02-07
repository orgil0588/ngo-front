// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTk6RhR2tDmhMOKfDwBOWLFoHm5wbH-C8",
  authDomain: "ngo-v1-322e0.firebaseapp.com",
  databaseURL: "https://ngo-v1-322e0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ngo-v1-322e0",
  storageBucket: "ngo-v1-322e0.appspot.com",
  messagingSenderId: "977036828243",
  appId: "1:977036828243:web:9167a03e3c629ceb30f0a6",
  measurementId: "G-BLHVGN2344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);