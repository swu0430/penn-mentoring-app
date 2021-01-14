import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import ProfileForm from './profile';

class App extends React.Component {
  render () {
    return (
      <div>
        <ProfileForm/>
      </div>
    );
  }
}

export default App;
