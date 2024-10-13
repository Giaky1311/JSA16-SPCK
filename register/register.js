// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCuQg327GoQ3nQ8QKTSWnAhU3n9A6m5fwM",
  authDomain: "spck-1aec7.firebaseapp.com",
  projectId: "spck-1aec7",
  storageBucket: "spck-1aec7.appspot.com",
  messagingSenderId: "840104338477",
  appId: "1:840104338477:web:2591b13024f9cb87eac4a4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Event listener for register button
document.getElementById("registerBtn").onclick = (event) => {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account Created...");
      window.location.href = "login.html";
    })
    .catch((error) => {
      alert(error.message); // Show error message
    });
};
