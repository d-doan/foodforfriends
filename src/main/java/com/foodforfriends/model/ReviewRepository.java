package com.foodforfriends.model;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.foodforfriends.model.IBusiness;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    List<Review> findByUser(User user);

    List<Review> findByBusiness(IBusiness business);
}
