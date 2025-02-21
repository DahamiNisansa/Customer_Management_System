package edu.icet.repository;

import edu.icet.dto.CustomerDTO;
import edu.icet.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CustomerRepo extends JpaRepository<CustomerEntity, Integer>{

    List<CustomerEntity> findByName(String name);

    List<CustomerEntity> findByAddress(String address);

    List<CustomerEntity> findBySalary(String salary);
}
