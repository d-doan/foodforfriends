package com.foodforfriends.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Review {

    // probably don't need business instance var, instead business should hold
    // List<Review>
    // similar thing with user
    // composite key of some sort? (User, business)
    // what about multiple reviews of the same place? - (User, business, Date) ?
    @NonNull
    private IBusiness business;
    @NonNull
    private User user;
    private Double rating;
    private Integer cost;
    private String description;

    // maybe add photo option
    // not sure how that would fit in json but problem for later
}
