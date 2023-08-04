package com.foodforfriends.web.user;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.foodforfriends.model.User;
import com.foodforfriends.respoitory.UserRepository;

@Component
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private final Logger log = LoggerFactory.getLogger(UserService.class);

    List<User> getUsers() {
        return userRepository.findAll();
    }

    ResponseEntity<?> getUser(@PathVariable String username) {
        Optional<User> user = userRepository.findById(username);
        return user.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    ResponseEntity<User> createUser(@RequestBody User user) throws URISyntaxException {
        log.info("Request to create user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/user/" + result.getUsername())).body(result);
    }

    ResponseEntity<User> updateUser(@RequestBody User user) {
        log.info("Request to update user: {}", user);
        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }

    public ResponseEntity<?> deleteUser(@PathVariable String username) {
        log.info("Request to delete user: {}", username);
        userRepository.deleteById(username);
        return ResponseEntity.ok().build();
    }

}
