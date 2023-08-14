package com.foodforfriends.web.restaurant;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.foodforfriends.model.Restaurant;
import com.foodforfriends.model.Review;
import com.foodforfriends.repository.RestaurantRepository;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;
    private final Logger log = LoggerFactory.getLogger(RestaurantService.class);

    List<Restaurant> getRestaurants() {
        return restaurantRepository.findAll();
    }

    ResponseEntity<?> getRestaurant(@PathVariable String name) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(name);
        return restaurant.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) throws URISyntaxException {
        log.info("Request to create restaurant: {}", restaurant);
        Restaurant result = restaurantRepository.save(restaurant);
        return ResponseEntity.created(new URI("/restaurant/" +
                result.getName())).body(result);
    }

    ResponseEntity<Restaurant> updateRestaurant(@RequestBody Restaurant restaurant) {
        log.info("Request to update restaurant: {}", restaurant);
        Restaurant result = restaurantRepository.save(restaurant);
        return ResponseEntity.ok().body(result);
    }

    public ResponseEntity<?> deleteRestaurant(@PathVariable String name) {
        log.info("Request to delete restaurant: {}", name);
        restaurantRepository.deleteById(name);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<?> removeReview(String restaurantName, Review review) {
        log.info("Request to remove review: {}", review.getId());
        ResponseEntity<?> response = getRestaurant(restaurantName);
        if (response.getStatusCode() != HttpStatus.NOT_FOUND) {
            Restaurant restaurant = ((Restaurant) response.getBody());
            if (restaurant != null) {
                restaurant.getReviews().remove(review);
                return ResponseEntity.ok().build();
            }
        }
        return ResponseEntity.notFound().build();
    }
}
