package com.foodforfriends.web.user;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.model.User;
import com.foodforfriends.respoitory.UserRepository;

@RestController
public class UserController {

    private final Logger log = LoggerFactory.getLogger(UserController.class);
    private UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    List<User> users() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{username}")
    ResponseEntity<?> getUser(@PathVariable String username) {
        Optional<User> user = userRepository.findById(username);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/user")
    ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
        log.info("Request to create user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + result.getUsername())).body(result);
    }

    @PutMapping("/user/{username}")
    ResponseEntity<User> updateUser(@RequestBody User user) {
        log.info("Request to update user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/user/{username}")
    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        log.info("Request to delete user: {}", username);
        userRepository.deleteById(username);
        return ResponseEntity.ok().build();
    }
}
