import React from 'react';
import './header.style.css';

class Header extends React.Component {

  render() {
    return (
      <header className="container">
        <h1>Restaurants</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </header>
    );
  }
}

export default Header;