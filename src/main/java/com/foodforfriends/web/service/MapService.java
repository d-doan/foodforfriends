package com.foodforfriends.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

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

}
