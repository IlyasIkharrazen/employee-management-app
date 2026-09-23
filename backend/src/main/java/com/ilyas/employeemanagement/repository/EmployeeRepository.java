package com.ilyas.employeemanagement.repository;

import com.ilyas.employeemanagement.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    @Query("""
            SELECT e FROM Employee e
            WHERE (:firstname IS NULL
                OR LOWER(e.firstname) LIKE LOWER(CONCAT('%', :firstname, '%')))
            AND (:lastname IS NULL
                OR LOWER(e.lastname) LIKE LOWER(CONCAT('%', :lastname, '%')))
            AND (:email IS NULL
                OR LOWER(e.email) LIKE LOWER(CONCAT('%', :email, '%')))
            AND (:immatricule IS NULL
                OR LOWER(e.immatricule) LIKE LOWER(CONCAT('%', :immatricule, '%')))
""")
    public List<Employee> searchEmployee(
            @Param("firstname") String firstname,
            @Param("lastname") String lastname,
            @Param("email") String email,
            @Param("immatricule") String immatricule
    );
}
