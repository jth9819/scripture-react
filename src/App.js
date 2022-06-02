import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import { CTA, Brand, Navbar } from "./components";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      {/* <Possibility /> */}
      <CTA />
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default App;
