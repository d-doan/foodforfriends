package com.foodforfriends.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.foodforfriends.web.service.MapService;

@RestController
public class MapController {

    @Autowired
    private MapService mapService;

    @GetMapping("/geocode")
    public ResponseEntity<String> geocodeAddress(@RequestParam String address) {
        return mapService.geocodeAddress(address);
    }

}
