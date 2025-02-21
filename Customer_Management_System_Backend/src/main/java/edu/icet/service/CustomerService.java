package edu.icet.service;

import edu.icet.dto.CustomerDTO;

import java.util.List;

public interface CustomerService {
    void addCustomer(CustomerDTO customer);

    List<CustomerDTO> getAll();

    void deleteCustomer(Integer id);

    void updateCustomer(CustomerDTO customer);

    CustomerDTO searchById(Integer id);

    List<CustomerDTO> searchByName(String name);

    List<CustomerDTO> searchByAddress(String address);

    List<CustomerDTO> searchBySalary(String salary);
}
