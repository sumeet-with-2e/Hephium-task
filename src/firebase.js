// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VTDYaBuEQaFkbESFJ-w-ktdIyjhTeww",
  authDomain: "hephium-test.firebaseapp.com",
  projectId: "hephium-test",
  storageBucket: "hephium-test.appspot.com",
  messagingSenderId: "812316336074",
  appId: "1:812316336074:web:388c88db82dfd8bb49f933",
  measurementId: "G-HR57MHBSW6"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, auth };
