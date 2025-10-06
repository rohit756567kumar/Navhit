import React from "react";
import "./App.css";
import logo from "./assets/logonavhit.png";

export default function Header() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <img src={logo} alt="NavHit Logo" className="logo" />
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Actionable <span className="gradient-text">Feedback</span>
            <br />
            Turn Feedback Into Progress
          </h1>
          <p className="hero-subtitle">
            Beautiful feedback widgets that capture bugs, features and reviews
            with automatic screenshots.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started Free</button>
            <button className="btn-secondary">See Live Demo</button>
          </div>

          <p className="hero-note">
            Free forever • Works on any website • 60-second setup
          </p>
        </div>
      </section>
    </>
  );
}
