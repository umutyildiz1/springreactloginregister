package com.umutyildiz.loginregisterapp.business.abstracts;

import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<?> createUser(User user);
}
