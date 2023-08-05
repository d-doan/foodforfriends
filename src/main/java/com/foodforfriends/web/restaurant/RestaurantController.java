package com.foodforfriends.web.restaurant;

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

import com.foodforfriends.model.Restaurant;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @GetMapping("/restaurants")
    List<Restaurant> restaurants() {
        return restaurantService.getRestaurants();
    }

    @GetMapping("/restaurant/{name}")
    ResponseEntity<?> getRestaurant(@PathVariable String name) {
        return restaurantService.getRestaurant(name);
    }

    @PostMapping("/restaurant")
    ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) throws URISyntaxException {
        return restaurantService.createRestaurant(restaurant);
    }

    @PutMapping("/restaurant/{name}")
    ResponseEntity<Restaurant> updateRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.updateRestaurant(restaurant);
    }

    @DeleteMapping("/restaurant/{name}")
    public ResponseEntity<?> deleteRestaurant(@PathVariable String name) {
        return restaurantService.deleteRestaurant(name);
    }
}
