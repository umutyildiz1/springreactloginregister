package com.umutyildiz.loginregisterapp.api.controller;

import com.umutyildiz.loginregisterapp.business.abstracts.UserService;
import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/1.0/users")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/createUser")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user){
        return userService.createUser(user);

    }
}
