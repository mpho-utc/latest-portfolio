// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, orderBy, limit, query, doc, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACW4vvhiMvJlArW0Cm8paDh5A7HTA9Q1M",
  authDomain: "my-portfolio-7719a.firebaseapp.com",
  projectId: "my-portfolio-7719a",
  storageBucket: "my-portfolio-7719a.firebasestorage.app",
  messagingSenderId: "658569163278",
  appId: "1:658569163278:web:7d74a00a51babafb29025f",
  measurementId: "G-FLEJQ9WCWZ"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);

