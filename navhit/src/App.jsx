import React from "react";
import "./App.css";
import logo from "./assets/logonavhit.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Boost Toad" className="logo" />
          <div className="logo-text">
            <h1 className="title">NavHit</h1>
            <p className="subtitle">Insights Made Easy</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#blog">Blog</a>
          <a href="#docs">Docs</a>
        </nav>

        {/* Buttons */}
        <div className="auth-buttons">
          <a href="/signup" className="get-started">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );}