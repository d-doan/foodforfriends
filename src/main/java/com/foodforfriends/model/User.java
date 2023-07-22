package com.foodforfriends.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Data
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

    @Id
    private String username;
    private String displayName;
    private String password;
    private String email;
    // friendGroups might be wonky with the @AllArgsConstructor
    private List<Group> friendGroups;
}
