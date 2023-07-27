package com.foodforfriends.respoitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.IBusiness;
import com.foodforfriends.model.Review;
import com.foodforfriends.model.User;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    List<Review> findByUser(User user);

    List<Review> findByBusiness(IBusiness business);
}
