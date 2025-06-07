import React from "react";
import "./Features.css";

function Features() {
  const features = [
    {
      title: "Smart Automation",
      desc: "Create buy/sell rules that execute automatically.",
      icon: "⚙️",
    },
    {
      title: "Real-Time Alerts",
      desc: "Get notified the moment conditions are met.",
      icon: "🔔",
    },
    {
      title: "Visual Portfolio",
      desc: "See trends and make smarter moves with analytics.",
      icon: "📊",
    },
  ];

  return (
    <section id="features" className="features">
      <h2>Why Choose UpstockAuto?</h2>
      <div className="feature-cards">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <span className="icon">{f.icon}</span>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
