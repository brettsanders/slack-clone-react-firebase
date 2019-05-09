import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyAe3BVC_iZ4xlyFHtnyDDjrUl0rCMXQd2g",
  authDomain: "chat-app-brett.firebaseapp.com",
  databaseURL: "https://chat-app-brett.firebaseio.com",
  projectId: "chat-app-brett",
  storageBucket: "chat-app-brett.appspot.com",
  messagingSenderId: "968634074728"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
