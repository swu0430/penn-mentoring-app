import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';

class Navigation extends Component {
  render() {
    return (
      <div className="ui menu">
        <GoogleAuth/>
        <a className="active item">
          Home
        </a>
        <a className="item">
          Messages
        </a>
        <a className="item">
          Profiles
        </a>
      </div>
    );
  }
}

export default Navigation;
