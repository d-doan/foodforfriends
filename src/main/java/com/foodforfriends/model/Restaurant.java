package com.foodforfriends.model;

import java.util.List;

import com.foodforfriends.utility.Utility;

import io.micrometer.common.lang.NonNull;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@Entity
@Table(name = "restaurants")
public class Restaurant implements IBusiness {

    // might be able to refactor variables below to a business abstract class/class
    // id will become name of restaraunt generated from gmaps api later
    @Id
    @NonNull
    private String name;
    private List<Review> reviews;
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
