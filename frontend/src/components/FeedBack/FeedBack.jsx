import React, { useState } from "react";
import "./FeedBack.css"; // Import the CSS file

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    console.log("Feedback submitted:", formData);

    setFeedbackSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Feedback Form</h1>
      <div className="feedback-form-container">
        {!feedbackSubmitted ? (
          <form onSubmit={handleSubmit} className="feedback-form">
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
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Your Feedback"
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Submit Feedback
            </button>
          </form>
        ) : (
          <div className="feedback-success">
            <h2 className="success-title">Thank you for your feedback!</h2>
            <p className="success-text">
              We appreciate you taking the time to share your thoughts with us.
            </p>
            <button
              onClick={() => setFeedbackSubmitted(false)}
              className="submit-button"
            >
              Submit More Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedBack;
