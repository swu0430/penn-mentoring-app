import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import ProfileForm from './profile';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import 'firebase/firestore';
import firebase from 'firebase'
import Burrito from './burrito';
import {BrowserRouter, Route} from 'react-router-dom'
import Navigation from './navigation';
import Auth from './Auth';
import GoogleAuth from './GoogleAuth';

require('firebase/auth')
// function Burrito() {
//   // easily access the Firestore library
//   const burritoRef = useFirestore()
//     .collection('tryreactfire')
//     .doc('burrito');
//
//   // subscribe to a document for realtime updates. just one line!
//   const { status, data } = useFirestoreDocData(burritoRef);
//
//   // easily check the loading status
//   if (status === 'loading') {
//     return <p>Fetching burrito flavor...</p>;
//   }
//
//
//   return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
// }

class App extends React.Component {

  render () {
    // if(this.state.user) {
      return (
        <div className="ui cotainer">
          <BrowserRouter>
            <Navigation/>
            <Route path="/" exact component={Auth}/>
            <Route path="/profileform" exact component={ProfileForm}/>
            <Route path="/burrito" exact component={Burrito}/>
          </BrowserRouter>
        </div>
      );
    // } else {
    //   return (
    //     <div className="ui cotainer">
    //       <BrowserRouter>
    //         <Route path="/" exact component={GoogleAuth}/>
    //       </BrowserRouter>
    //     </div>
    //   );
    // }
  }
}

export default App;
