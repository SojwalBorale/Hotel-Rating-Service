import React, { useState } from "react";
import axios from "axios";
import "./HotelService.css";

const API_BASE_URL = "http://localhost:8082/hotels";

function HotelService() {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({ name: "", location: "", about: "" });
  const [selectedHotel, setSelectedHotel] = useState(null);

  // Function to fetch all hotels
  const fetchHotels = () => {
    axios.get(API_BASE_URL)
      .then(res => setHotels(res.data))
      .catch(err => console.error("Error fetching hotels:", err));
  };

  // GET hotel by ID
  const getHotelById = (id) => {
    axios.get(`${API_BASE_URL}/${id}`)
      .then(res => setSelectedHotel(res.data))
      .catch(err => console.error("Error fetching hotel:", err));
  };

  // POST create hotel
  const createHotel = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/save`, newHotel)
      .then(() => fetchHotels()) // refresh list after saving
      .catch(err => console.error("Error saving hotel:", err));
  };

  return (
    <div className="hotel-container">
      <h1>Hotel Management</h1>

      <button onClick={fetchHotels}>Show Hotel List</button> {/* ✅ button to load list */}

      {hotels.length > 0 && (
        <>
          <h2>Hotel List</h2>
          <ul className="hotel-list">
            {hotels.map(hotel => (
              <li key={hotel.id}>
                <div>
                  <strong>{hotel.name}</strong> - {hotel.location}
                  <br />
                  <span style={{ color: "#666" }}>Hotel ID: {hotel.id}</span>
                  <br />
                  <span style={{ fontStyle: "italic" }}>{hotel.about}</span>
                </div>
                <button onClick={() => getHotelById(hotel.id)}>View</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {selectedHotel && (
        <div className="hotel-details">
          <h2>Hotel Details</h2>
          <p><strong>Hotel ID:</strong> {selectedHotel.id}</p>
          <p><strong>Name:</strong> {selectedHotel.name}</p>
          <p><strong>Location:</strong> {selectedHotel.location}</p>
          <p><strong>About:</strong> {selectedHotel.about}</p>
        </div>
      )}

      <h2>Add New Hotel</h2>
      <form className="hotel-form" onSubmit={createHotel}>
        <input
          type="text"
          name="name"
          placeholder="Hotel Name"
          value={newHotel.name}
          onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newHotel.location}
          onChange={(e) => setNewHotel({ ...newHotel, location: e.target.value })}
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={newHotel.about}
          onChange={(e) => setNewHotel({ ...newHotel, about: e.target.value })}
        />
        <button type="submit">Save Hotel</button>
      </form>
    </div>
  );
}

export default HotelService;
