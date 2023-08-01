package com.foodforfriends.web;

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

import com.foodforfriends.model.Restaurant;
import com.foodforfriends.respoitory.RestaurantRepository;

@RestController
public class RestaurantController {

    private final Logger log = LoggerFactory.getLogger(RestaurantController.class);
    private RestaurantRepository restaurantRepository;

    public RestaurantController(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @GetMapping("/restaurants")
    List<Restaurant> restaurants() {
        return restaurantRepository.findAll();
    }

    @GetMapping("/restaurant/{name}")
    ResponseEntity<?> getRestaurant(@PathVariable String name) {
        Optional<Restaurant> restaraunt = restaurantRepository.findById(name);
        return restaraunt.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // also janky because getName and getId datatypes are difference

    @PostMapping("/restaurant")
    ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) throws URISyntaxException {
        log.info("Request to create restaurant: {}", restaurant);
        Restaurant result = restaurantRepository.save(restaurant);
        return ResponseEntity.created(new URI("/restaurant/" +
                result.getName())).body(result);
    }

    @PutMapping("/restaurant/{name}")
    ResponseEntity<Restaurant> updateRestaurant(@RequestBody Restaurant restaurant) {
        log.info("Request to update restaurant: {}", restaurant);
        Restaurant result = restaurantRepository.save(restaurant);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/restaurant/{name}")
    public ResponseEntity<?> deleteRestaurant(@PathVariable String name) {
        log.info("Request to delete group: {}", name);
        restaurantRepository.deleteById(name);
        return ResponseEntity.ok().build();
    }
}
