import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">📈 UpstockAuto</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
        <button className="login-btn">Login</button>
      </nav>
    </header>
  );
}

export default Header;
