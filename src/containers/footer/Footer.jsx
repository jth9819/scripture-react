import React from 'react';
import { RiDivideFill } from 'react-icons/ri';
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to know what God says about you?
        </h1>
      </div>
      <div className="footer-btn">
        <p>Take Me</p>
      </div>
      <div className="footer-links">
        <div className="footer-links_logo">
          <p className='gradient__text' id="p-logo">Divine Studio</p>
          {/* <img src={logo} alt="logo" /> */}
          <p>Blank Address, All Rights Reserved</p>
        </div>
        <div className="footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links_div">
          <h4>Get in touch</h4>
          <p>Blank Address</p>
          <p>Blank Phone Number</p>
          <p>Blank Email Address</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>2022 Divine Studio. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer