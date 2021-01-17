import React from 'react';
import '../Auth.css';
import {Redirect} from 'react-router-dom';
import { useFirebaseApp, useFirestore, useAuth, useUser } from 'reactfire';
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
      currentUser: null,
      showSignUpErrorMessage: false,
      showSignInErrorMessage: false
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
      this.setState({showSignUpErrorMessage: false});
      this.setState({showSignInErrorMessage: false});
      // window.location.reload(false);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      this.setState({showSignUpErrorMessage: true});
      this.setState({showSignInErrorMessage: false});
    });
  }

  handleSignIn = async(e) => {
    e.preventDefault();

    console.log(this.state.user.email);

    await firebase.auth().signInWithEmailAndPassword(this.state.user.email, this.state.user.password)
    .then((user) => {
      this.setCurrentUser();
      this.setState({showSignUpErrorMessage: false});
      this.setState({showSignInErrorMessage: false});
      // console.log(this.state.user.email);
      // console.log("signin request complete");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      this.setState({showSignInErrorMessage: true});
      this.setState({showSignUpErrorMessage: false});
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
    if (this.state.showSignUpErrorMessage) {
      return (
        <div class="auth-border">
          <form>
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/><br />
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/><br />
            <button onClick={this.handleSignUp}>Sign Up</button>
            <button onClick={this.handleSignIn}>Sign In</button>
          </form>
          <h4 class="sign-up-error-message">This account already exists!</h4>
        </div>
      )
    } else if (this.state.showSignInErrorMessage) {
      return(
        <div class="auth-border">
          <form>
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/><br />
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/><br />
            <button onClick={this.handleSignUp}>Sign Up</button>
            <button onClick={this.handleSignIn}>Sign In</button>
          </form>
          <h4 class="sign-in-error-message">This account does not exist yet! Please sign up first.</h4>
        </div>
      )
    } else {
      return (
        this.state.currentUser ?
        <div class="auth-border">
          <h3> You're now signed in! </h3>
          <h4> Go to My Profile to share your profile info! </h4>
          <h4> Explore Profiles tab to find your connection! </h4>
          <button onClick={this.handleSignOut}>Sign Out</button>
        </div>
        :
        <div class="auth-border">
          <form>
            <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/><br />
            <input type="password" placeholder="Password" name="password" onChange={this.handleChange}/><br />
            <button onClick={this.handleSignUp}>Sign Up</button>
            <button onClick={this.handleSignIn}>Sign In</button>
          </form>
        </div>
      )
    }
  }
}
  
export default Auth;