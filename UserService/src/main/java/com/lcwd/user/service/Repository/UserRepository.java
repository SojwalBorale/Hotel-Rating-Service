package com.lcwd.user.service.Repository;

import com.lcwd.user.service.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    //if you want to implement any custome method or query
    //
}
