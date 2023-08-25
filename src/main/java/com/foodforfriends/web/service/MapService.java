package com.foodforfriends.web.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@Service
public class MapService {

    @Value("${google.places.api.key}")
    private String apiKey;

    private final Logger log = LoggerFactory.getLogger(MapService.class);

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
