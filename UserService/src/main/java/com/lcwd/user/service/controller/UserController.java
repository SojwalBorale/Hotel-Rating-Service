package com.lcwd.user.service.controller;

import com.lcwd.user.service.entity.User;
import com.lcwd.user.service.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    // Create user
    @PostMapping("/save")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        this.userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body("Data Saved");
    }

    // Get single user
    @GetMapping("/{id}")
    public ResponseEntity<User> getSingleUser(@PathVariable("id") String userId) {
        User user = this.userService.getUser(userId);
        return ResponseEntity.ok(user);
    }

    // Get all users
    @GetMapping
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = this.userService.getAllUser();
        return ResponseEntity.ok(users);
    }

}
