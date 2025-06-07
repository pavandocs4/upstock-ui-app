import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Automate Your Stock Portfolio with Confidence</h1>
        <p>
          Smart rules. Real-time analytics. Full control. Let automation do the
          heavy lifting.
        </p>
        <button className="get-started">Get Started</button>
      </div>
      <div className="hero-img">
        <img
          src="https://source.unsplash.com/600x400/?stocks,finance"
          alt="stocks"
        />
      </div>
    </section>
  );
}

export default Hero;
