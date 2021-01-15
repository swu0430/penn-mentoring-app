import React, { Component } from 'react';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import 'firebase/firestore';
import firebase from 'firebase'
require('firebase/auth')

function Burrito() {
  var currentUser = firebase.auth().currentUser;

  const burritoRef = useFirestore()
    .collection('tryreactfire')
    .doc('burrito');

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  const changeBurrito = event => {
      burritoRef.set({
        yummy: !data.yummy
      });
      //Make sure we call CallBack from parent component

  };

  // easily check the loading status
  if (status === 'loading') {
    return <p>Fetching burrito flavor...</p>;

  }

  if (!currentUser) {
    return <p>Please sign in to view contents</p>;
  }

  return (
    <div>
      <button onClick={changeBurrito}> Change your burrito evaluation </button>
      <p> The burrito is {data.yummy ? 'good' : 'bad'}!</p>
    </div>
  );

}

export default Burrito;
