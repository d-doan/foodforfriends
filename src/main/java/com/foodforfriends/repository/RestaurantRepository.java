package com.foodforfriends.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, String> {

    Restaurant findByBusinessName(String businessName);
}
