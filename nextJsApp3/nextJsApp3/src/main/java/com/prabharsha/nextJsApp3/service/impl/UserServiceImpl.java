package com.prabharsha.nextJsApp3.service.impl;

import com.prabharsha.nextJsApp3.entity.UserEntity;
import com.prabharsha.nextJsApp3.model.User;
import com.prabharsha.nextJsApp3.repository.UserRepo;
import com.prabharsha.nextJsApp3.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    private final UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User saveUser(User user) {
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(user, userEntity);
        userRepo.save(userEntity);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        List<UserEntity> userEntities = userRepo.findAll();

        List<User> users = userEntities.stream().map(userEntity -> new User(
                userEntity.getUserNIC(),
                userEntity.getUserName(),
                userEntity.getContactNo()
        )).collect(Collectors.toList());
        return users;
    }


}
