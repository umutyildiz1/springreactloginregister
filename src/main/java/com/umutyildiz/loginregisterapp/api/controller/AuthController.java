package com.umutyildiz.loginregisterapp.api.controller;

import com.umutyildiz.loginregisterapp.business.abstracts.AuthService;
import com.umutyildiz.loginregisterapp.core.customAnnotations.CurrentUser;
import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/1.0/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("handle")
    public ResponseEntity<?> handleAuth(@CurrentUser User user){
        return authService.handleAuth(user);
    }


}
