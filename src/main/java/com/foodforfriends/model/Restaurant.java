package com.foodforfriends.model;

import java.util.ArrayList;
import java.util.List;

import com.google.maps.model.LatLng;

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

    @Id
    @NonNull
    private String businessName;
    private String readableAddress;
    private LatLng encodedLocation;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Review> reviews = new ArrayList<Review>();

}
