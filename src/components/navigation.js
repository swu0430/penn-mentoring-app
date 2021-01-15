import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/profileform" className="item">
          Profile
        </Link>
        <Link to="/burrito" className="item">
          Burrito
        </Link>
      </div>
    );
  }
}

export default Navigation;
