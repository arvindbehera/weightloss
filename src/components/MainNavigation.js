import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "../pages/Home";
import WeightLoss from "../pages/WeightLoss";
import Diet from "../pages/Diet";
import Fitness from "../pages/Fitness";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <div>
      <div className="header">
        <span className="logo">Weightloss Tips</span>
        <div className="nav">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/weightloss" className="link">
            Weight Loss
          </Link>
          <Link to="/diet" className="link">
            Diet
          </Link>
          <Link to="/fitness" className="link">
            Fitness
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/weightloss" element={<WeightLoss />}></Route>
        <Route path="/diet" element={<Diet />}></Route>
        <Route path="/fitness" element={<Fitness />}></Route>
      </Routes>
    </div>
  );
}

export default MainNavigation;
