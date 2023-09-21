package com.foodforfriends.utility;

import java.util.Comparator;

import com.foodforfriends.model.Review;

public class TimeComparator implements Comparator<Review> {
    @Override
    public int compare(Review r1, Review r2) {
        return r2.getDatePosted().compareTo(r1.getDatePosted());
    }
}
