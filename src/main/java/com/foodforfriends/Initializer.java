package com.foodforfriends;

import java.util.Collections;
import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.foodforfriends.model.Group;
import com.foodforfriends.model.GroupRepository;
import com.foodforfriends.model.User;

@Component
public class Initializer implements CommandLineRunner {

    private final GroupRepository repository;

    public Initializer(GroupRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) {
        Stream.of("group1", "group2", "group3").forEach(nickname -> repository.save(new Group(nickname)));

        Group g1 = repository.findByNickname("group2");
        User dan = User.builder().username("nggv2").displayName("Dan").build();
        g1.setUsers(Collections.singleton(dan));
        repository.save(g1);

        repository.findAll().forEach(System.out::println);
        System.out.println("--------------------------------------TEST--------------------------------------");
    }
}
