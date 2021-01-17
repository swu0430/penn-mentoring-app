import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyCrMuxk0iX829fAGQV0Q-oqtH69QsGJh8o",
  authDomain: "penn-mentoring-app.firebaseapp.com",
  databaseURL: "https://penn-mentoring-app-default-rtdb.firebaseio.com",
  projectId: "penn-mentoring-app",
  storageBucket: "penn-mentoring-app.appspot.com",
  messagingSenderId: "486406239584",
  appId: "1:486406239584:web:06017633fdbc293ce09a05"
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
