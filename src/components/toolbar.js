
import React from 'react';
import './toolbar.css';
import logo from './Jumpman_logo.png'

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <a href="#store">Find a Store</a>
        <a href="#help">Help</a>
        <a href="#join">Join Us</a>
        <a href="#signin">Sign In</a>
      </div>
    </div>
  );
};

export default Toolbar;