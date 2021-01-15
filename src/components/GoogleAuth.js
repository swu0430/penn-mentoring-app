import React, {useState} from 'react';
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });

  }

  return (
    <div>
    <h1>Sign up</h1>
     <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
       <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
       <button type="submit">Sign Up</button>
     </form>
     {user.error && <h4>{user.error}</h4>}
    </div>
  )
};

export default GoogleAuth;
