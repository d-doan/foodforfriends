package com.foodforfriends.web;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
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

import com.foodforfriends.model.Review;
import com.foodforfriends.respoitory.ReviewRepository;

@RestController
public class ReviewController {

    // use id as a placeholder until a better key is decided upon

    private final Logger log = LoggerFactory.getLogger(ReviewController.class);
    private ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping("/reviews")
    Collection<Review> reviews() {
        return reviewRepository.findAll();
    }

    @GetMapping("/reviews/{id}")
    ResponseEntity<?> getReview(@PathVariable Long id) {
        Optional<Review> reviews = reviewRepository.findById(id);
        return reviews.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/review")
    ResponseEntity<Review> createReview(@RequestBody Review review) throws URISyntaxException {
        log.info("Request to create review: {}", review);
        Review result = reviewRepository.save(review);
        return ResponseEntity.created(new URI("/review/" + result.getId())).body(result);
    }

    @PutMapping("/review/{id}")
    ResponseEntity<Review> updateReview(@RequestBody Review review) {
        log.info("Request to update review: {}", review);
        Review result = reviewRepository.save(review);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/review/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable Long id) {
        log.info("Request to delete review: {}", id);
        reviewRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
