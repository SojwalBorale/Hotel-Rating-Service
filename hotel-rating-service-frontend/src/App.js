import React from "react";
import UserService from "./UserService";
import HotelService from "./HotelService";
import RatingService from "./RatingService";

function App() {
  return (
    <div>
      <UserService />
      <hr />
      <HotelService />
      <hr />
      <RatingService />   {/* ✅ render RatingService */}
    </div>
  );
}

export default App;
