import React from 'react';
import { useFirebaseApp, useFirestore, useFirestoreCollectionData } from 'reactfire';
import firebase from 'firebase'
require('firebase/auth')
// require("firebase-admin");

class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
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
    const db = firebase.app().firestore();
    const snapshot = await db.collection('users').get();
    var users = [];

    snapshot.forEach((doc) => {
      // var current
      // return <div> {doc.data()} </div>;
      users.push(doc.data())
      // console.log(doc.id, '=>', doc.data());

    });
    // this.setState({profiles: snapshot})
    //
    // // console.log(snapshot);
    // // console.log(users);
    this.setState({profiles: users})
    console.log(this.state.profiles);
  }


  async componentDidMount() {
    await this.setCurrentUser();
    await this.setProfiles();
    // console.log(this.state.currentUser)
  }


  render() {
    // const profileCollection = this.state.profile.map((profile, index) => {
    //   return (
    //     <div>
    //       <p> Penn Affiliation: {profile.pennGroup}</p>
    //     </div>
    //   )
    // })

    return (
      <div>
        <h3> Find profiles that you'd like to connect with! </h3>
        <br/>
        {
          this.state.profiles.map((profile) =>
          <div className="ui segment">
            <b> Penn Affiliation </b>
            <div>{profile.pennGroup}</div>
            <br/>

            <b>Job Experience</b>
            {profile.jobs.map((job) => <li> {job.job} @ {job.org} </li>)}
            <br/>

            <b>Career Interests</b>
            {profile.jobInterests.map((job) => <li> Interested in: {job.job} @ {job.org} </li>)}
            <br/>

            <button className="ui button"> Contact </button>
          </div>

        )}

      </div>
    )


    // return (
    //   <div>
  //   {this.state.profiles.map((profile, index) => (
  //     <div className="ui card">
  //       <div className="content">
  //         Penn Affiliation: {profile.pennGroup} <br/>
  //         Work Experience <br/>
  //       </div>
  //   </div>)
  // }
  // </div>;
  }
}

export default Profiles;
