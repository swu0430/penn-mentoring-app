import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className="ui menu">
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
