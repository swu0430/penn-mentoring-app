import React from 'react';
import { useFirebaseApp, useFirestore, useFirestoreCollectionData } from 'reactfire';
import firebase from 'firebase'
require('firebase/auth')
// require("firebase-admin");

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: null,
      currentUser: null
    };
  };

  // firestore() = useFirestore();
  // userCollection() = firestore.collection('users');
  // firebase() = useFirebaseApp();
  async setCurrentUser() {
    const currentUser = await firebase.auth().currentUser;
    this.setState({currentUser: currentUser});
  }

  async setProfiles() {
    // const admin = require('firebase-admin');
    // admin.initializeApp();

    const db = firebase.app().firestore();

    const snapshot = await db.collection('users').get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });

    this.setState({profiles: snapshot})

  }


  async componentDidMount() {
    await this.setCurrentUser();
    await this.setProfiles();
    console.log(this.state.currentUser)
  }

  render() {
    return (
      <div>
        {this.state.profiles}
      </div>
    );
  }
}

export default Profiles;
