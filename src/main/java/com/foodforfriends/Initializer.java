package com.foodforfriends;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.foodforfriends.model.Group;
import com.foodforfriends.model.Restaurant;
import com.foodforfriends.model.Review;
import com.foodforfriends.model.User;
import com.foodforfriends.respoitory.GroupRepository;
import com.foodforfriends.respoitory.RestaurantRepository;

/*
 * Used for mocking data in db for in-ram testing purposes
 */
@Component
public class Initializer implements CommandLineRunner {

    private final GroupRepository groupRepository;
    private final RestaurantRepository restaurantRepository;

    public Initializer(GroupRepository groupRepository, RestaurantRepository restaurantRepository) {
        this.groupRepository = groupRepository;
        this.restaurantRepository = restaurantRepository;
    }

    @Override
    public void run(String... strings) {
        System.out.println("\n----------------------GROUP----------------------\n");
        Stream.of("group1", "group2", "group3").forEach(nickname -> groupRepository.save(new Group(nickname)));

        Group g1 = groupRepository.findByNickname("group1");
        Group g2 = groupRepository.findByNickname("group2");
        User dan = User.builder().username("nggv2").displayName("Dan").build();
        User allen = User.builder().username("authtooth").displayName("Allen").build();
        g1.setUsers(Collections.singleton(dan));
        g2.setUsers(Collections.singleton(allen));

        groupRepository.save(g1);
        groupRepository.save(g2);

        groupRepository.findAll().forEach(System.out::println);

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
