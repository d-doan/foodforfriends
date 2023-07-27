package com.foodforfriends.web;

import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.model.IBusiness;
import com.foodforfriends.model.Review;
import com.foodforfriends.model.ReviewRepository;
import com.foodforfriends.model.User;

@RestController
public class ReviewController {

    private final Logger log = LoggerFactory.getLogger(ReviewController.class);
    private ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping("/reviews")
    Collection<Review> reviews() {
        return reviewRepository.findAll();
    }

    // definite problem of reviews with same business tag overriding each other
    // might need to redesign system logic
    // also can't do .findById() similar to GroupController because no @Id tag is
    // set in
    // the review class (i think that's how it works)
    @GetMapping("/reviews/{business}")
    ResponseEntity<?> getReview(@PathVariable IBusiness business) {
        // Optional<Review> reviews = reviewRepository.findByBusiness(business);
        // return reviews.map(response -> ResponseEntity.ok().body(response))
        // .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
        return null;
    }

}
