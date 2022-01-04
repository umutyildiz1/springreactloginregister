package com.umutyildiz.loginregisterapp.business.concretes;

import com.umutyildiz.loginregisterapp.business.abstracts.UserService;
import com.umutyildiz.loginregisterapp.dataAccess.abstracts.UserDao;
import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private UserDao userDao;
    private PasswordEncoder passwordEncoder;

    @Autowired
    UserServiceImpl(UserDao userDao, PasswordEncoder passwordEncoder){
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public ResponseEntity<?> createUser(User user) {
        user.setUserPassword(this.passwordEncoder.encode(user.getUserPassword()));
        return ResponseEntity.ok(userDao.save(user));
    }
}
