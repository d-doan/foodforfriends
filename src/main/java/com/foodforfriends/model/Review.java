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

    @NonNull
    private Business business;
    @NonNull
    private User user;
    private Double rating;
    private String description;

    // maybe add photo option
    // not sure how that would fit in json but problem for later
}
