import React, { useState } from "react";
import axios from "axios";
import "./RatingService.css";

const API_BASE_URL = "http://localhost:8083/ratings"; // adjust port if different

function RatingService() {
  const [ratings, setRatings] = useState([]);
  const [newRating, setNewRating] = useState({ userId: "", hotelId: "", rating: 0, feedback: "" });

  // Function to fetch all ratings
  const fetchRatings = () => {
    axios.get(API_BASE_URL)
      .then(res => setRatings(res.data))
      .catch(err => console.error("Error fetching ratings:", err));
  };

  // GET ratings by userId
  const getRatingsByUserId = (userId) => {
    axios.get(`${API_BASE_URL}/users/${userId}`)
      .then(res => setRatings(res.data))
      .catch(err => console.error("Error fetching ratings by user:", err));
  };

  // GET ratings by hotelId
  const getRatingsByHotelId = (hotelId) => {
    axios.get(`${API_BASE_URL}/hotels/${hotelId}`)
      .then(res => setRatings(res.data))
      .catch(err => console.error("Error fetching ratings by hotel:", err));
  };

  // POST create rating
  const createRating = (e) => {
    e.preventDefault();
    axios.post(API_BASE_URL, newRating)
      .then(() => fetchRatings()) // refresh list after saving
      .catch(err => console.error("Error saving rating:", err));
  };

  return (
    <div className="rating-container">
      <h1>Rating Management</h1>

      <button onClick={fetchRatings}>Show Rating List</button> {/* ✅ button to load list */}

      {ratings.length > 0 && (
        <>
          <h2>Rating List</h2>
          <ul className="rating-list">
            {ratings.map(r => (
              <li key={r.ratingId}>
                <div>
                  <strong>Rating ID:</strong> {r.ratingId} <br />
                  <strong>User ID:</strong> {r.userId} <br />
                  <strong>Hotel ID:</strong> {r.hotelId} <br />
                  <strong>Rating:</strong> {r.rating} / 10 <br />
                  <strong>Feedback:</strong> {r.feedback}
                </div>
                <div className="rating-actions">
                  <button onClick={() => getRatingsByUserId(r.userId)}>By User</button>
                  <button onClick={() => getRatingsByHotelId(r.hotelId)}>By Hotel</button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Add New Rating</h2>
      <form className="rating-form" onSubmit={createRating}>
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          value={newRating.userId}
          onChange={(e) => setNewRating({ ...newRating, userId: e.target.value })}
        />
        <input
          type="text"
          name="hotelId"
          placeholder="Hotel ID"
          value={newRating.hotelId}
          onChange={(e) => setNewRating({ ...newRating, hotelId: e.target.value })}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating (0-10)"
          min="0"
          max="10"
          value={newRating.rating}
          onChange={(e) => setNewRating({ ...newRating, rating: e.target.value })}
        />
        <input
          type="text"
          name="feedback"
          placeholder="Feedback"
          value={newRating.feedback}
          onChange={(e) => setNewRating({ ...newRating, feedback: e.target.value })}
        />
        <button type="submit">Save Rating</button>
      </form>
    </div>
  );
}

export default RatingService;
