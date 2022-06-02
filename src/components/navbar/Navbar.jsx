import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <p className='gradient__text'>Divine Studio</p>
          {/* <img src={Logo} alt="logo" /> */}
        </div>
        <div className="navbar-links__container">
          <p><a href="#home">Home</a></p>
          <p><a href="#ds">What is DS?</a></p>
          {/* <p><a href="#possibility">Open AI</a></p> */}
          <p><a href="#vision">Our Vision</a></p>
          <p><a href="#search">Search</a></p>
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu__container scale-up-center">
            <div className="navbar-menu__container-links">
              <p><a href="#home">Home</a></p>
              <p><a href="#ds">What is DS?</a></p>
              {/* <p><a href="#possibility">Open AI</a></p> */}
              <p><a href="#vision">Our Vision</a></p>
              <p><a href="#search">Search</a></p>
            </div>
            <div className="navbar-menu__container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
