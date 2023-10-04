// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2va6oWsHe3W7g8gtpyfBCiQAUzZs6Io",
  authDomain: "react-dragon-news-auth-d0d43.firebaseapp.com",
  projectId: "react-dragon-news-auth-d0d43",
  storageBucket: "react-dragon-news-auth-d0d43.appspot.com",
  messagingSenderId: "259064898045",
  appId: "1:259064898045:web:4e826fd46d16403af47994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;