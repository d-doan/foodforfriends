package com.foodforfriends.web.user;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.model.User;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/users")
    List<User> users() {
        return userService.getUsers();
    }

    @GetMapping("/user/{username}")
    ResponseEntity<?> getUser(@PathVariable String username) {
        return userService.getUser(username);
    }

    @PostMapping("/user")
    ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
        return userService.createUser(user);
    }

    @PutMapping("/user/{username}")
    ResponseEntity<User> updateUser(@RequestBody User user) {
        return userService.updateUser(user);
    }

    @DeleteMapping("/user/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        return userService.deleteUser(username);
    }
}
