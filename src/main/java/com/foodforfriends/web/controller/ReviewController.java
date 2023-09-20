package com.foodforfriends.web.controller;

import java.net.URISyntaxException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.model.Review;
import com.foodforfriends.model.ReviewAndRestaurantData;
import com.foodforfriends.web.service.ReviewService;

@RestController
public class ReviewController {

    @Autowired
    private ReviewService reviewService;

    @GetMapping("/reviews")
    Collection<Review> reviews() {
        return reviewService.getReviews();
    }

    @GetMapping("/reviews-sorted")
    Collection<Review> reviewsSorted() {
        return reviewService.getSortedReviews();
    }

    @GetMapping("/reviews/{id}")
    ResponseEntity<?> getReview(@PathVariable Long id) {
        return reviewService.getReview(id);
    }

    @PostMapping("/review")
    ResponseEntity<Review> createReview(@RequestBody Review review) throws URISyntaxException {
        return reviewService.createReview(review);
    }

    @PostMapping("/review/")
    ResponseEntity<Review> createReview(@RequestBody ReviewAndRestaurantData reviewAndRestaurantData)
            throws URISyntaxException {
        return reviewService.createReview(reviewAndRestaurantData);
    }

    @PutMapping("/review/{id}")
    ResponseEntity<Review> updateReview(@PathVariable Review review) {
        return reviewService.updateReview(review);
    }

    @DeleteMapping("/review/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable Long id) {
        return reviewService.deleteReview(id);
    }

}
