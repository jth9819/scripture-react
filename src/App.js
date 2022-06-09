import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";

import { NativeNavbar } from "./components";
import { NativeFooter } from "./containers";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <NativeNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <NativeFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
