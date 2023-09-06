package com.foodforfriends.web.service;

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
import com.google.maps.model.PlacesSearchResult;

@Service
public class MapService {

    @Value("${google.places.api.key}")
    private String apiKey;

    @Autowired
    private GeoApiContext geoApiContext;

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

    public PlacesSearchResult[] searchForRestaurant(
            @RequestParam String queryString,
            @RequestParam double lat,
            @RequestParam double lng) throws Exception {

        LatLng userLocation = new LatLng(lat, lng);

        return PlacesApi.textSearchQuery(geoApiContext, queryString)
                .location(userLocation)
                .radius(10000)
                .type(PlaceType.RESTAURANT)
                .await().results;
    }

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
