import React from 'react';
import {Redirect} from 'react-router-dom';
import { useFirebaseApp, useAuth, useUser } from 'reactfire';
import firebase from 'firebase'
require('firebase/auth')

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
       nickname: '',
       email: '',
       password: '',
       error: '',
     },
      currentUser: null
    };
  };

  async setCurrentUser() {
    const currentUser = await firebase.auth().currentUser;
    this.setState({currentUser: currentUser});
  }

  async componentDidMount() {
    await this.setCurrentUser();
    console.log(this.state.currentUser)
  }

  handleChange = async(e) => {
    console.log(e.target.value);
    console.log(e.target.name);

    await this.setState({
      user:{
        ...this.state.user,
        [e.target.name]: e.target.value,
        error: '',
      }
    })

    console.log(this.state.user.email);

  };

  handleSignUp = async(e) => {
    e.preventDefault();

    await firebase.auth().createUserWithEmailAndPassword(this.state.user.email, this.state.user.password)
    .then((user) => {
      this.setCurrentUser();
      // window.location.reload(false);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  handleSignIn = async(e) => {
    e.preventDefault();

    console.log(this.state.user.email);

    await firebase.auth().signInWithEmailAndPassword(this.state.user.email, this.state.user.password)
    .then((user) => {
      this.setCurrentUser();
      console.log(this.state.currentUser)
      // console.log(this.state.user.email);
      // console.log("signin request complete");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  handleSignOut = async(e) => {
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

  render(){
    return (
      this.state.currentUser?
      <div>
        <h3> You're now signed in! </h3>
        <h4> Go to My Profile to share your profile info! </h4>
        <h4> Explore Profiles tab to find your connection! </h4>
        <button onClick={this.handleSignOut}>Sign Out</button>
      </div>
      :
      <div>
       <form>
         <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/><br />
         <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/><br />
         <button onClick={this.handleSignUp}>Sign Up</button>
         <button onClick={this.handleSignIn}>Sign In</button>
       </form>
       {this.state.user.error && <h4>{this.state.user.error}</h4>}
      </div>
    )
  }
}

export default Auth;
