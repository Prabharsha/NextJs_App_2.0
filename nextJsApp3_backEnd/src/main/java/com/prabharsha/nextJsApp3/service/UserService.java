package com.prabharsha.nextJsApp3.service;

import com.prabharsha.nextJsApp3.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

}
