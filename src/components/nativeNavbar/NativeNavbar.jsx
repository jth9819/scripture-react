import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import Logo from '../../assets/logo.svg';
import './nativeNavbar.css';

const NativeNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="native-navbar">
      <div className="native-navbar-links">
        <div className="native-navbar-links__logo">
          <p className='gradient__text'>Divine Studio</p>
          {/* <img src={Logo} alt="logo" /> */}
        </div>
        <div className="native-navbar-links__container">
          <a href="/">Home</a>
          {/* <p><a href="#ds">What is DS?</a></p>
          <p><a href="#vision">Our Vision</a></p>
          <p><a href="#search">Search</a></p> */}
          <a href="/search">Search</a>
        </div>
      </div>
      <div className='native-navbar-sign'>
        <a href="/">Sign in</a>
        <button type="button">Sign up</button>
      </div>
      <div className="native-navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="native-navbar-menu__container scale-up-center">
            <div className="native-navbar-menu__container-links">
              <a href="/">Home</a>
              {/* <p><a href="#ds">What is DS?</a></p>
              <p><a href="#vision">Our Vision</a></p>
              <p><a href="#search">Search</a></p> */}
              <a href="/search">Search</a>
            </div>
            <div className="native-navbar-menu__container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NativeNavbar;
