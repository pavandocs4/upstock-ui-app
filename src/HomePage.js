import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;
