package com.foodforfriends.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.web.service.MapService;
import com.google.maps.model.PlacesSearchResponse;

@RestController
public class MapController {

    @Autowired
    private MapService mapService;

    // Finds restaurants within dist meters of the user
    @GetMapping("/map/nearby")
    public PlacesSearchResponse getNearbyRestaurants(
            @RequestParam double lat,
            @RequestParam double lng,
            @RequestParam int dist) throws Exception {
        return mapService.getNearbyRestaurants(lat, lng, dist);
    }

    @GetMapping("/geocode")
    public ResponseEntity<String> geocodeAddress(@RequestParam String address) {
        return mapService.geocodeAddress(address);
    }

}
