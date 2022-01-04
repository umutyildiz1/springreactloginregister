package com.umutyildiz.loginregisterapp.dataAccess.abstracts;

import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User,Integer> {
    User getByEmail(String email);
}
