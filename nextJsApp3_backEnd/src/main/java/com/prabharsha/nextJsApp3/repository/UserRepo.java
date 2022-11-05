package com.prabharsha.nextJsApp3.repository;
import com.prabharsha.nextJsApp3.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserEntity,String> {

}
