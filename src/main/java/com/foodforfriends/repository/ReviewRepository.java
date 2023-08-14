package com.foodforfriends.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    List<Review> findByUsername(String username);

    List<Review> findByRestaurantName(String restaurantName);
}
