import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="whatgpt3 section__margin" id="ds">
    <div className="whatgpt3-feature">
      <Feature title="What is Divine Studio?" text="Divine Studio is a tool that lets you explore scripture. With new features being implemented periodically, we currently offer search, Bible, & devotional tools." />
    </div>
    <div className="whatgpt3-heading">
      <h1 className="gradient__text">Learn. Reflect. Apply.</h1>
      <p>Explore the features</p>
    </div>
    <div className="whatgpt3-container">
      <Feature title="Search" text="The search feature allows you to search for a topic that displays related scriptures." />
      <Feature title="Bible" text="The Bible feature allows you to read the Bible in various translations." />
      <Feature title="Devotional" text="The devotional feature allows you to read a different devotional every day." />
    </div>
  </div>
);

export default WhatGPT3;
