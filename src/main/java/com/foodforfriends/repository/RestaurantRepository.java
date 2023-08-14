package com.foodforfriends.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant, String> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    Restaurant findByName(String name);
}
