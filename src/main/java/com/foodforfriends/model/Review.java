package com.foodforfriends.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import jakarta.persistence.*;

@Data
@AllArgsConstructor
public class Review {

    private Business business;
    @NonNull
    private Double rating;
    private String description;
}
