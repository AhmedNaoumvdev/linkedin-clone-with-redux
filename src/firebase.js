import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDK2Smo7zN2R7FFCGlUPQTPs--VmyfQdYY",
    authDomain: "linkedin-clone-1a79b.firebaseapp.com",
    projectId: "linkedin-clone-1a79b",
    storageBucket: "linkedin-clone-1a79b.appspot.com",
    messagingSenderId: "842281175549",
    appId: "1:842281175549:web:212175ac74c23f1f52b194"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db , auth};