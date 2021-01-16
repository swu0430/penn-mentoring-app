import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import firebase from 'firebase'
require('firebase/auth')

const GoogleAuth = () => {
  const [user, setUser] = useState({
   nickname: '',
   email: '',
   password: '',
   error: '',
 });

 // onChange function
 const handleChange = e => {
   setUser({
     ...user,
     [e.target.name]: e.target.value,
     error: '',
   })
 };


  const firebase = useFirebaseApp();
  var currentUser = firebase.auth().currentUser;

  const handleSignUp = async(e) => {
    e.preventDefault();

    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      window.location.reload(false);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  const handleSignIn = async(e) => {
    e.preventDefault();

    await firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      window.location.reload(false);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  const handleSignOut = async(e) => {
    e.preventDefault();

    await firebase.auth().signOut().then(() => {
      window.location.reload(false);
    }).catch((error) => {
      // An error hapit pened.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  return (
    // currentUser?
    <div>
     <form>
       <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
       <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
       <button onClick={handleSignUp}>Sign Up</button>
       <button onClick={handleSignIn}>Sign In</button>
     </form>
     {user.error && <h4>{user.error}</h4>}
    </div>
    // :
    // <button onClick={handleSignOut}>Sign Out</button>
  )
};

export default GoogleAuth;
