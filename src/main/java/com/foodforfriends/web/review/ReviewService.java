package com.foodforfriends.web.review;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.foodforfriends.model.Review;
import com.foodforfriends.repository.ReviewRepository;
import com.foodforfriends.web.restaurant.RestaurantService;

@Service
public class ReviewService {

    // use id as a placeholder until a better key is decided upon

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private RestaurantService restaurantService;
    private final Logger log = LoggerFactory.getLogger(ReviewService.class);

    Collection<Review> getReviews() {
        return reviewRepository.findAll();
    }

    ResponseEntity<?> getReview(@PathVariable Long id) {
        Optional<Review> reviews = reviewRepository.findById(id);
        return reviews.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    ResponseEntity<Review> createReview(@RequestBody Review review) throws URISyntaxException {
        log.info("Request to create review: {}", review);
        Review result = reviewRepository.save(review);
        restaurantService.addReview(review.getRestaurantName(), review);
        // gonna have to add review to user reviewList as well
        return ResponseEntity.created(new URI("/review/" + result.getId())).body(result);
    }

    ResponseEntity<Review> updateReview(@RequestBody Review review) {
        log.info("Request to update review: {}", review);
        Review result = reviewRepository.save(review);
        return ResponseEntity.ok().body(result);
    }

    ResponseEntity<?> deleteReview(@PathVariable Long id) {
        log.info("Request to delete review: {}", id);
        if (getReview(id).getStatusCode() != HttpStatus.NOT_FOUND) {
            Review review = (Review) getReview(id).getBody();
            if (review != null) {
                restaurantService.removeReview(review.getRestaurantName(), review);
                reviewRepository.deleteById(id);
                return ResponseEntity.ok().build();
            }
        }
        return ResponseEntity.notFound().build();
    }
}
