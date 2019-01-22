package com.codecool.tuttifrutti.repository;

import com.codecool.tuttifrutti.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;

@Transactional
public interface UserRepository extends JpaRepository<User, Long> {
//    User findById(long id);

    User findByUsername(String username);

}
