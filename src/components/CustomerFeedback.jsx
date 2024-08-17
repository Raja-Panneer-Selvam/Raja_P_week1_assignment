import React, { useState } from "react";
import "./customerFeedback.css";

function CustomerFeedback() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData({
        name,
        email,
        rating,
        comments,
      });

      setName("");
      setEmail("");
      setRating("");
      setComments("");
    }
  };

  const validateForm = () => {
    if (!name || !email || !rating) {
      alert("Please fill out all required fields.");
      return false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  return (
    <div className="feedback-form">
      <h1>Customer Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            required
            placeholder="Rating"
          />
        </div>
        <div className="form-group">
          <label>Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Write somthing here..."
          />
        </div>
        <button id="btn" type="submit">
          Submit Feedback
        </button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h1>Submitted Feedback</h1>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Rating:</strong> {submittedData.rating}
          </p>
          <p>
            <strong>Comments:</strong> {submittedData.comments}
          </p>
        </div>
      )}
    </div>
  );
}

export default CustomerFeedback;
