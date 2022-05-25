import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='header section__padding' id='home'>
      <div className='header-content'>
        <h1 className="gradient__text">Divine Studio</h1>
        <p>This is just filler text. I'm not exactly sure what to put here. As of now it will serve as a description for the header text above. Enter your email to get a test notification sent to your email.</p>
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
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header