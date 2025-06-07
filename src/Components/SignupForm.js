import React, { useState } from "react";
import axios from "axios";
import "./SignupForm.css";

function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    upstockId: "",
    upstockPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost/user", formData);
      setMessage("Signup successful!");
      console.log(res.data);
    } catch (err) {
      setMessage("Error creating user");
      console.error(err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Your Account</h2>
        {message && <p className="message">{message}</p>}

        <div className="input-group">
          <label>Email ID</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Upstock ID</label>
          <input
            type="text"
            name="upstockId"
            placeholder="your-upstock-id"
            value={formData.upstockId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Upstock Password</label>
          <input
            type="password"
            name="upstockPassword"
            placeholder="••••••••"
            value={formData.upstockPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;
