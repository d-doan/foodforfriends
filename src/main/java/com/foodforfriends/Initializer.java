package com.foodforfriends;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.foodforfriends.model.Restaurant;
import com.foodforfriends.model.Review;
import com.foodforfriends.model.User;
import com.foodforfriends.respoitory.RestaurantRepository;

/*
 * Used for mocking data in db for in-ram testing purposes
 */
@Component
public class Initializer implements CommandLineRunner {

    private final RestaurantRepository restaurantRepository;

    public Initializer(RestaurantRepository restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public void run(String... strings) {
        User dan = User.builder().username("nggv2").displayName("Dan").build();
        User allen = User.builder().username("authtooth").displayName("Allen").build();

        System.out.println("\n----------------------RESTAURANT----------------------\n");
        Stream.of("restaurant1", "restaurant2").forEach(name -> restaurantRepository.save(new Restaurant(name)));

        Restaurant restaurant1 = restaurantRepository.findByName("restaurant1");
        Review review1 = Review.builder().restaurant(restaurant1).user(dan).rating(3.0).cost(2).description("mid")
                .build();
        Review review2 = Review.builder().restaurant(restaurant1).user(allen).rating(5.0).cost(1).description("wowzers")
                .build();
        List<Review> reviewList1 = new ArrayList<Review>(Arrays.asList(review1, review2));
        restaurant1.setReviews(reviewList1);
        restaurantRepository.save(restaurant1);

        restaurantRepository.findAll().forEach(System.out::println);

    }
}
