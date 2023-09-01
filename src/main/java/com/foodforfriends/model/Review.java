package com.foodforfriends.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import jakarta.persistence.*;

@Data
@AllArgsConstructor
@RequiredArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "reviews")
public class Review {

    // PLACEHOLDER ID
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String restaurantName;
    @NonNull
    private String username;
    @NonNull
    private String datePosted;
    private Double rating;
    private Integer cost;
    @Lob
    private String description;

}
