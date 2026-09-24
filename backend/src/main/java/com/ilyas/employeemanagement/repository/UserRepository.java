package com.ilyas.employeemanagement.repository;

import com.ilyas.employeemanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
