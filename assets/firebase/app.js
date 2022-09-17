
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUCXYFypoqCYTkQOlFkcbxU3oug1DLAGA",
    authDomain: "character-form-teste.firebaseapp.com",
    projectId: "character-form-teste",
    storageBucket: "character-form-teste.appspot.com",
    messagingSenderId: "436544841478",
    appId: "1:436544841478:web:40d2b142a989899374e087"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app
