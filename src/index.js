import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDS1UwdnqE6ToaZpEHISufjp7DT_C0q7yk",
  authDomain: "penn-mentoring.firebaseapp.com",
  databaseURL: "https://penn-mentoring-default-rtdb.firebaseio.com",
  projectId: "penn-mentoring",
  storageBucket: "penn-mentoring.appspot.com",
  messagingSenderId: "635588784879",
  appId: "1:635588784879:web:08b1d46cceac3be9efa11a"
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
