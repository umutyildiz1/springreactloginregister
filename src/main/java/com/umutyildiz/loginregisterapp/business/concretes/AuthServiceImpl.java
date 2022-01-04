package com.umutyildiz.loginregisterapp.business.concretes;

import com.umutyildiz.loginregisterapp.business.abstracts.AuthService;
import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    @Override
    public ResponseEntity<?> handleAuth(User user) {
        return ResponseEntity.ok(user);
    }
}
