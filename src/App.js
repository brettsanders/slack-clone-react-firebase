import React, {useState} from 'react';
import Nav from './Nav';
import Channel from './Channel';
import {firebase} from './firebase';

function App() {
  const [user, setUser] = useState(null);

  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // provider.setCustomParameters({
    //   login_hint: 'user@example.com',
    // });

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode)
        console.log(errorMessage)
        console.log(email)
        console.log(credential)
      });
  };

  return false ? (
    <div className="App">
      <Nav />
      <Channel />
    </div>
  ) : (
    <div className="Login">
      <h1>Chat!</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
}

export default App;
