package com.prabharsha.nextJsApp3.controller;

import com.prabharsha.nextJsApp3.model.User;
import com.prabharsha.nextJsApp3.service.UserService;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.PushBuilder;
import java.util.List;

@CrossOrigin(value = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/customer")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @PostMapping("/user")
    public User SaveUser(@RequestBody User user) {
        System.out.println("got the User save req");
        System.out.println(user);
        return userService.saveUser(user);
    }

    @GetMapping("/user")
    public List<User> getAllUsers() {
        System.out.println("got the getAllUser req");
        return  userService.getAllUsers();
    }



}
