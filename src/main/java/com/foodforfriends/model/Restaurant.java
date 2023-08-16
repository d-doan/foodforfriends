package com.foodforfriends.model;

import java.util.ArrayList;
import java.util.List;

import com.foodforfriends.utility.Utility;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "restaurants")
public class Restaurant {

    // id will become name of restaraunt generated from gmaps api later
    @Id
    @NonNull
    private String name;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<Review>();
    private Double avgRating;
    // maybe make cost an enum later
    private Integer avgCost;
    // add filter categories later

    public Double calculateRating() {
        // can't have a rating without reviews
        if (reviews.size() == 0)
            return null;

        Double total = 0.0;
        for (Review review : reviews) {
            total += review.getRating();
        }

        return Utility.round(total / reviews.size(), 1);
    }

    public Integer calculateCost() {
        if (reviews.size() == 0)
            return null;

        float total = 0.0f;
        for (Review review : reviews) {
            total += review.getCost();
        }
        return Math.round(total / reviews.size());
    }

}
