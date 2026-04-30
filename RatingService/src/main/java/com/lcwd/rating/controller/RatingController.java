package com.lcwd.rating.controller;

import com.lcwd.rating.entity.Rating;
import com.lcwd.rating.service.RatingserviceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
@CrossOrigin(origins = "http://localhost:3000")
public class RatingController {

    @Autowired
    private RatingserviceImpl ratingservice;

    // create
    @PostMapping
    public ResponseEntity<Rating> create(@RequestBody Rating rating){
        if (rating.getRating() < 0 || rating.getRating() > 10) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        return  ResponseEntity.status(HttpStatus.CREATED).body(ratingservice.create(rating));
    }

    // getAllData
    @GetMapping
    public ResponseEntity<List<Rating>> getAllData(){
        return ResponseEntity.ok(ratingservice.getAllRating());
    }

    // get byuserId
    @GetMapping("/users/{userId}")
    public ResponseEntity<List<Rating>> getRatingsByUserId(@PathVariable String userId){
        return ResponseEntity.ok(ratingservice.getRatingsByUserId(userId));
    }

   //  get by hotelid
    @GetMapping("/hotels/{hotelId}")
    public ResponseEntity<List<Rating>> getRatingsByHotelId(@PathVariable String hotelId){
        return ResponseEntity.ok(ratingservice.getRatingByHotelId(hotelId));
    }
}
