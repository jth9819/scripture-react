import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "./index.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

import { Navbar } from "./components";
import { Footer } from "./containers";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
