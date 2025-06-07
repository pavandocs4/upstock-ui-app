import React from "react";
import "./CTA.css";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleShowSignup = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/signup"); // redirect user to /signup page
  };

  return (
    <section className="cta">
      <form onSubmit={handleShowSignup}>
        <h2>Ready to Automate Your Trades?</h2>
        <p>Join thousands optimizing their portfolios with UpstockAuto.</p>
        <button className="signup-btn" type="submit">
          Create Free Account
        </button>
      </form>
    </section>
  );
};

export default CTA;
