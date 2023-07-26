package com.foodforfriends.model;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Long> {

    // note the parameter has to be exactly what the field is otherwise spring
    // explodes
    Group findByNickname(String nickname);

}
