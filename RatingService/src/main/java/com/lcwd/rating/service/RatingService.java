package com.lcwd.rating.service;

import com.lcwd.rating.entity.Rating;
import org.springframework.stereotype.Service;

import java.util.List;


public interface RatingService {

    // create

    Rating create(Rating rating);
    // getAll
    List<Rating> getAllRating();
    // getall userID
    List<Rating> getRatingsByUserId(String userId);
    // getAll Byhotel
    List<Rating> getRatingByHotelId(String hotelId);
}
