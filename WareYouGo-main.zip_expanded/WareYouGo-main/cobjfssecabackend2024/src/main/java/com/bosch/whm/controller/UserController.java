package com.bosch.whm.controller;

//import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.whm.service.*;
//import com.auth0.jwt.JWT;
//import com.auth0.jwt.algorithms.Algorithm;
import com.bosch.whm.model.*;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserBOService userBOService;

    @PostMapping("/authenticate")
    public Boolean authenticate(@RequestBody Users user) {
        Boolean check = userBOService.authenticate(user);
        if (check) {
            System.out.println("Successful Login");
        } else {
            System.out.println("Failed login");
        }
        return check;
    }

    @GetMapping("/fetchallusers")
    public List<Users> fetchAllUsers() {
        return userBOService.getAllUsers();
    }
    
    @PostMapping("/fetchuser")
    public Users fetchUser(@RequestBody Users user) {
    	return userBOService.fetchUser(user);
    }
    
    @GetMapping("/getpendingrequests")
    public List<Users> getPendingRequests() {
    	return userBOService.fetchPendingRequests();
    }

    @GetMapping("/{id}")
    public Users getUserById(@PathVariable int id) {
        return userBOService.getUserById(id).orElse(null);
    }

    @PostMapping("/createuser")
    public Users createUser(@RequestBody Users user) {
        return userBOService.createUser(user);
    }

    @PutMapping("/{id}") // use this to update user profile
    public Users updateUserProfile(@PathVariable int id, @RequestBody Users user) {
        return userBOService.updateUser(id, user);
    }

    @PutMapping("/changepassword") // call changePassword method
    public boolean changePassword(@RequestBody Users user) {
        return userBOService.changePassword(user);
    }

    @PutMapping("/modifyprofile") // call modifyUserProfile method
    public boolean modifyUserProfile(@RequestBody Users user) {
        return userBOService.modifyUserProfile(user);
    }

    @PutMapping("/resetpassword") // call resetPassword method
    public boolean resetPassword(@RequestBody Users user) {
        return userBOService.resetPassword(user);
    }
    
    @PutMapping("/acceptuser")
    public boolean acceptUser(@RequestBody Users user) {
    	return userBOService.acceptUser(user);
    }
    
    @PutMapping("/rejectuser")
    public boolean rejectUser(@RequestBody Users user) {
    	return userBOService.rejectUser(user);
    }

    @PostMapping("/register") // call requestAccess method
    public Users requestAccess(@RequestBody Users user) {
        return userBOService.requestAccess(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable int id) {
        userBOService.deleteUser(id);
    }
}
