package com.lcwd.hotel.service;

import com.lcwd.hotel.entity.Hotel;

import java.util.List;

public interface HotelService {
    // create method
    Hotel create(Hotel hotel);

    //get All
    List<Hotel> getAll();

    //getSingle
    Hotel getById(String id);
}
