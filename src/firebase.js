import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDR7tJSTvv5I_7u-CiRdPBgLxi9QBV3Wk0",
    authDomain: "linkedin-clone-3d632.firebaseapp.com",
    projectId: "linkedin-clone-3d632",
    storageBucket: "linkedin-clone-3d632.appspot.com",
    messagingSenderId: "538874089742",
    appId: "1:538874089742:web:5cd090d10357788e8f475f",
    measurementId: "G-GMTQZJ7BQ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};