import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import jesusface from '../../assets/jesus-face-gradient.png'

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className="gradient__text">Divine Studio</h1>
        <p>Divine Studio is a place for you to explore scripture. We offer tools to help you see and reflect on what God says about you.</p>
        <div className='header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='header-content__people'>
          <img src={people} alt="people" />
          <p>100 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='header-image'>
        <img src={jesusface} alt="ai" />
      </div>
    </div>
  )
}

export default Header