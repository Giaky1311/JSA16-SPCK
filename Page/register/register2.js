// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuQg327GoQ3nQ8QKTSWnAhU3n9A6m5fwM",
    authDomain: "spck-1aec7.firebaseapp.com",
    projectId: "spck-1aec7",
    storageBucket: "spck-1aec7.appspot.com",
    messagingSenderId: "840104338477",
    appId: "1:840104338477:web:2591b13024f9cb87eac4a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//input

const button = document.getElementById('loginbtn');
const auth = getAuth()

button.onclick = (event) => {
    event.preventDefault()


    //input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...")
            window.location.href = "login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
}
