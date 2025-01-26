import React, { useState } from "react";
import "./Support.css"; // Import the CSS file

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.query) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Support query submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({ name: "", email: "", query: "" });
  };

  return (
    <div className="support-container">
      <h1 className="support-title">Support Page</h1>
      <div className="support-form-container">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="support-form">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Your Query</label>
              <textarea
                name="query"
                className="form-textarea"
                placeholder="How can we help you?"
                rows="5"
                value={formData.query}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit Query
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h2 className="success-title">Thank you for reaching out!</h2>
            <p className="success-text">
              Our support team will get back to you soon.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="sub-button"
            >
              Submit Another Query
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Support;
