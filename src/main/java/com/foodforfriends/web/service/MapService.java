package com.foodforfriends.web.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

import com.google.maps.GeoApiContext;
import com.google.maps.PlacesApi;
import com.google.maps.model.LatLng;
import com.google.maps.model.PlaceType;
import com.google.maps.model.PlacesSearchResponse;

@Service
public class MapService {

    @Value("${google.places.api.key}")
    private String apiKey;

    @Autowired
    private GeoApiContext geoApiContext;

    private final Logger log = LoggerFactory.getLogger(MapService.class);

    public PlacesSearchResponse getNearbyRestaurants(
            @RequestParam double lat,
            @RequestParam double lng,
            @RequestParam int dist) throws Exception {

        LatLng userLocation = new LatLng(lat, lng);

        return PlacesApi.nearbySearchQuery(geoApiContext, userLocation)
                .radius(dist) // Search radius in meters
                .type(PlaceType.RESTAURANT)
                .await();
    }

    // implement Place Search for food place types
    // https://developers.google.com/maps/documentation/places/web-service/supported_types

    // dummy auto-gen code for reference

    // public PlacesSearchResponse searchNearbyPlaces(double lat, double lng) throws
    // Exception {
    // GeoApiContext context = new GeoApiContext.Builder()
    // .apiKey(apiKey)
    // .build();

    // return PlacesApi.nearbySearchQuery(context, new
    // com.google.maps.model.LatLng(lat, lng))
    // .radius(1000) // Search radius in meters
    // .type(PlaceType.RESTAURANT) // Example: searching for restaurants
    // .await();
    // }

    public ResponseEntity<String> geocodeAddress(@RequestParam String address) {
        // Create a RestTemplate to make HTTP requests
        RestTemplate restTemplate = new RestTemplate();

        // Construct the API URL with the provided address and API key
        String apiUrl = "https://maps.googleapis.com/maps/api/geocode/json"
                + "?address=" + address
                + "&key=" + apiKey;

        // Make a GET request to the Google Maps API
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        return response;
    }

}
