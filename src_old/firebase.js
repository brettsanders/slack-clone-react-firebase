import firebase from 'firebase';
import 'firebase/firestore';

var firebase_config = {
  apiKey: "AIzaSyAe3BVC_iZ4xlyFHtnyDDjrUl0rCMXQd2g",
  authDomain: "chat-app-brett.firebaseapp.com",
  databaseURL: "https://chat-app-brett.firebaseio.com",
  projectId: "chat-app-brett",
  storageBucket: "chat-app-brett.appspot.com",
  messagingSenderId: "968634074728"
};

firebase.initializeApp(firebase_config);

const db = firebase.firestore();

export { db };
