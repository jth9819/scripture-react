import React from 'react'

import {
    Features,
    WhatGPT3,
    Header,
  } from "../../containers";

  import { CTA, Brand } from "../../components";

const Home = () => {
  return (
    <>
        <div className="gradient__bg">
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <CTA />
    </>
  )
}

export default Home