package com.foodforfriends.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.Review;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    List<Review> findByUsername(String username);

    List<Review> findByRestaurantName(String restaurantName);
}
