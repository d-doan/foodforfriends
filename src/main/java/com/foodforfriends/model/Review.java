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
public class Review {

    // probably don't need business instance var, instead business should hold
    // List<Review>
    // similar thing with user
    // composite key of some sort? (User, business)
    // what about multiple reviews of the same place? - (User, business, Date) ?

    // PLACEHOLDER ID
    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String restaurantName;
    @NonNull
    private String username;
    private Double rating;
    private Integer cost;
    @Lob
    private String description;

    // maybe add photo option
    // not sure how that would fit in json but problem for later
}
