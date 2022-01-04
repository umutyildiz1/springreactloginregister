package com.umutyildiz.loginregisterapp.core.customAnnotations;

import com.umutyildiz.loginregisterapp.dataAccess.abstracts.UserDao;
import com.umutyildiz.loginregisterapp.entities.concretes.User;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail,String> {

    @Autowired
    private UserDao userDao;

    @Override
    public boolean isValid(String s, ConstraintValidatorContext constraintValidatorContext) {
        User user = userDao.getByEmail(s);
        if(user != null){
            return false;
        }
        return true;
    }
}
