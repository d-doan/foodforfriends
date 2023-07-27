package com.foodforfriends.respoitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.Group;

public interface GroupRepository extends JpaRepository<Group, Long> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    Group findByNickname(String nickname);

}
