package com.lcwd.hotel.controller;

import com.lcwd.hotel.entity.Hotel;
import com.lcwd.hotel.service.HotelServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {

    @Autowired
    private HotelServiceImpl hotelServiceImpl;

    //create
    @PostMapping("/save")
    public ResponseEntity<Hotel> createHotel(@RequestBody Hotel hotel){
          return ResponseEntity.status(HttpStatus.CREATED).body(hotelServiceImpl.create(hotel));
    }

    // get single
    @GetMapping("/{id}")
    public ResponseEntity<Hotel> getByID(@PathVariable ("id") String id){
       return  ResponseEntity.status(HttpStatus.OK).body(hotelServiceImpl.getById(id));
    }

    // get all
    @GetMapping
    public ResponseEntity<List<Hotel>> getAllData(){
         return ResponseEntity.ok(hotelServiceImpl.getAll());
    }
}
