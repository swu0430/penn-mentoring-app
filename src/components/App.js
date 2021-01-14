import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import ProfileForm from './profile';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import 'firebase/firestore';

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore()
    .collection('tryreactfire')
    .doc('burrito');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? 'good' : 'bad'}!</p>;
}

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <ProfileForm/>
        </div>
        <div className="App">
          <Burrito />
        </div>
      </div>
    );
  }
}

export default App;
