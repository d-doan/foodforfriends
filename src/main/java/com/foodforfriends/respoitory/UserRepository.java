package com.foodforfriends.respoitory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodforfriends.model.User;

public interface UserRepository extends JpaRepository<User, String> {

    User findByUsername(String username);
}
