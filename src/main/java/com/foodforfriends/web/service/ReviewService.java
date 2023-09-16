package com.foodforfriends.web.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
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
import com.foodforfriends.model.ReviewAndRestaurantData;
import com.foodforfriends.repository.ReviewRepository;
import com.foodforfriends.utility.Utility;
import com.google.maps.model.PlacesSearchResult;

@Service
public class ReviewService {

    // use id as a placeholder until a better key is decided upon

    @Autowired
    private ReviewRepository reviewRepository;
    @Autowired
    private RestaurantService restaurantService;
    private final Logger log = LoggerFactory.getLogger(ReviewService.class);

    public Collection<Review> getReviews() {
        return reviewRepository.findAll();
    }

    public Collection<Review> getSortedReviews() {
        Collection<Review> rCollection = getReviews();
        List<Review> rList = new ArrayList<>(rCollection);
        Utility.sortReviews(rList);
        return rList;
    }

    public ResponseEntity<?> getReview(@PathVariable Long id) {
        Optional<Review> reviews = reviewRepository.findById(id);
        return reviews.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    public ResponseEntity<Review> createReview(@RequestBody Review review) throws URISyntaxException {
        review.setDatePosted(Utility.getTime());
        try {
            review.setDateReadable(Utility.timeToString(review.getDatePosted()));
        } catch (ParseException e) {
            e.printStackTrace();
        }
        log.info("Request to create review: {}", review);
        Review result = reviewRepository.save(review);
        restaurantService.addReview(review.getRestaurantName(), review);
        return ResponseEntity.created(new URI("/review/" + result.getId())).body(result);
    }

    public ResponseEntity<Review> createReview(@RequestBody ReviewAndRestaurantData reviewAndRestaurantData)
            throws URISyntaxException {

        Review review = reviewAndRestaurantData.getReview();
        PlacesSearchResult restaurantData = reviewAndRestaurantData.getRestaurantData();

        review.setRestaurantName(restaurantData.name);
        review.setDatePosted(Utility.getTime());
        try {
            review.setDateReadable(Utility.timeToString(review.getDatePosted()));
        } catch (ParseException e) {
            e.printStackTrace();
        }

        log.info("Request to create review: {}", review);
        Review newReview = reviewRepository.save(review);

        if (restaurantService.getRestaurant(restaurantData.name).getStatusCode() == HttpStatus.NOT_FOUND) {
            // Add restaurant to db if doesn't already exist
            restaurantService.createNewRestaurant(restaurantData, newReview);
        } else {
            restaurantService.addReview(restaurantData.name, newReview);
        }
        return ResponseEntity.created(new URI("/review/" + newReview.getId())).body(newReview);
    }

    public ResponseEntity<Review> updateReview(@RequestBody Review review) {
        log.info("Request to update review: {}", review);
        Review result = reviewRepository.save(review);
        return ResponseEntity.ok().body(result);
    }

    public ResponseEntity<?> deleteReview(@PathVariable Long id) {
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
