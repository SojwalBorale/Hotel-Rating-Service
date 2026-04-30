import React, { useState } from "react";
import axios from "axios";
import "./UserService.css";

const API_BASE_URL = "http://localhost:8081/users";

function UserService() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", about: "" });
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users
  const fetchUsers = () => {
    axios.get(API_BASE_URL)
      .then(res => setUsers(res.data))
      .catch(err => console.error("Error fetching users:", err));
  };

  // Fetch single user by ID and set state
  const getUserById = (id) => {
    axios.get(`${API_BASE_URL}/${id}`)
      .then(res => setSelectedUser(res.data))
      .catch(err => console.error("Error fetching user:", err));
  };

  // Create user
  const createUser = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/save`, newUser)
      .then(() => fetchUsers())
      .catch(err => console.error("Error saving user:", err));
  };

  return (
    <div className="user-container">
      <h1>Hotel Rating Service Frontend</h1>

      <button onClick={fetchUsers}>Show User List</button>

      {users.length > 0 && (
        <>
          <h2>User List</h2>
          <ul className="user-list">
            {users.map(user => (
              <li key={user.userId}>
                <div>
                  <strong>{user.name}</strong> ({user.email}) - {user.about}
                  <br />
                  <span style={{ color: "#666" }}>User ID: {user.userId}</span>
                </div>
                <button onClick={() => getUserById(user.userId)}>View</button>
              </li>
            ))}
          </ul>
        </>
      )}

      {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>User ID:</strong> {selectedUser.userId}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>About:</strong> {selectedUser.about}</p>

          <h3>Ratings</h3>
          {selectedUser.ratings && selectedUser.ratings.length > 0 ? (
            <ul>
              {selectedUser.ratings.map(rating => (
                <li key={rating.ratingId}>
                  <p><strong>Rating ID:</strong> {rating.ratingId}</p>
                  <p><strong>Stars:</strong> {rating.stars}</p>
                  <p><strong>Feedback:</strong> {rating.feedback}</p>
                  {rating.hotel && (
                    <div className="hotel-info">
                      <p><strong>Hotel ID:</strong> {rating.hotel.id}</p>
                      <p><strong>Hotel Name:</strong> {rating.hotel.name}</p>
                      <p><strong>Location:</strong> {rating.hotel.location}</p>
                      <p><strong>About:</strong> {rating.hotel.about}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No ratings available.</p>
          )}
        </div>
      )}

      <h2>Add New User</h2>
      <form className="user-form" onSubmit={createUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={newUser.about}
          onChange={(e) => setNewUser({ ...newUser, about: e.target.value })}
        />
        <button type="submit">Save User</button>
      </form>
    </div>
  );
}

export default UserService;
