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
import com.foodforfriends.repository.RestaurantRepository;
import com.foodforfriends.repository.ReviewRepository;
import com.foodforfriends.repository.UserRepository;

/*
 * Used for mocking data in db for in-ram testing purposes
 */
@Component
public class Initializer implements CommandLineRunner {

        private final UserRepository userRepository;
        private final RestaurantRepository restaurantRepository;
        private final ReviewRepository reviewRepository;

        public Initializer(UserRepository userRepository, RestaurantRepository restaurantRepository,
                        ReviewRepository reviewRepository) {
                this.userRepository = userRepository;
                this.restaurantRepository = restaurantRepository;
                this.reviewRepository = reviewRepository;
        }

        @Override
        public void run(String... strings) {

                // -----------------------USER-----------------------
                User dan = User.builder().username("nggv2").displayName("Dan").password("password").email("dan@dan.com")
                                .build();
                User matthew = User.builder().username("waffle").displayName("Matthew").build();
                userRepository.save(dan);
                userRepository.save(matthew);

                // ----------------------REVIEW----------------------
                Review review1 = Review.builder().restaurantName("restaurant1").username("nggv2").rating(3.0).cost(2)
                                .description("mid")
                                .build();
                Review review2 = Review.builder().restaurantName("restaurant1").username("waffle").rating(4.0).cost(5)
                                .description("Then you're kidding yourself. Come on, Chef. I thought tonight was a night of hard home truths. This is one of them. You cook with obsession, not love. Even your hot dishes are cold. You're a chef. Your single purpose on this Earth is to serve people food that they might actually like, and you have failed. You've failed. And you've bored me. And the worst part is I'm still fucking hungry.")
                                .build();
                reviewRepository.save(review1);
                reviewRepository.save(review2);

                // --------------------RESTAURANT--------------------
                Stream.of("restaurant1", "restaurant2")
                                .forEach(name -> restaurantRepository.save(new Restaurant(name)));

                Restaurant restaurant1 = restaurantRepository.findByName("restaurant1");
                List<Review> reviewList1 = new ArrayList<Review>(Arrays.asList(review1, review2));
                restaurant1.setReviews(reviewList1);
                restaurantRepository.save(restaurant1);

                // PRINTING DATA
                System.out.println("\n----------------------USER----------------------\n");
                userRepository.findAll().forEach(System.out::println);

                System.out.println("\n----------------------RESTAURANT----------------------\n");
                restaurantRepository.findAll().forEach(System.out::println);

                System.out.println("\n----------------------REVIEW----------------------\n");
                reviewRepository.findAll().forEach(System.out::println);

        }
}
