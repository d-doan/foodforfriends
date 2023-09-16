package com.foodforfriends.model;

import com.google.maps.model.PlacesSearchResult;

import lombok.Data;

@Data
public class ReviewAndRestaurantData {
    private Review review;
    private PlacesSearchResult restaurantData;

}
