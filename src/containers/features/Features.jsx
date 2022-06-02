import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const featuresData = [
  {
    title: 'Know God',
    text: 'We want to encourage everyone to know God. Not just know about God, but for each person to know Him personally and have a genuine relationship with Him. The best way for that to happen is by understanding what God says about you.',
  },
  {
    title: 'Find Freedom',
    text: 'We believe every believer needs to experience freedom. Freedom from their sins, freedom from their bondage, and freedom from their yesterday. Divine Studio encourages people to find freedom through small groups in their community.',
  },
  {
    title: 'Discover Purpose',
    text: 'We believe God designed you with a specific plan and a special purpose. Our goal is to help you discover what that purpose is through scripture and daily devotionals.',
  },
  {
    title: 'Make A Difference',
    text: 'We believe the reason God designed you with specific gifts and a purpose is to ultimately make a difference in the lives of others. We encourage everyone to use their God given gifts in their own community.',
  },
];

const Features = () => {
  return (
    <div className="features section__padding" id="vision">
      <div className="features-heading">
        <h1 className="gradient__text">Our vision is to help you get excited about your walk with God. We provide tools to launch you into that.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features