import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDzhpRRBLoCw3TY74X3JZc6r7hthavineA",
    authDomain: "chat-app-brett.firebaseapp.com",
    databaseURL: "https://chat-app-brett.firebaseio.com",
    projectId: "chat-app-brett",
    storageBucket: "chat-app-brett.appspot.com",
    messagingSenderId: "968634074728",
    appId: "1:968634074728:web:a289b1c4547756ff"
  };

firebase.initializeApp(config);

const db = firebase.firestore();

export {db, firebase};
