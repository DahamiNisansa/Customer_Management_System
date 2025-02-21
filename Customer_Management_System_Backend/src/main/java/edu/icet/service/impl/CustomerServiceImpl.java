package edu.icet.service.impl;

import edu.icet.dto.CustomerDTO;
import edu.icet.entity.CustomerEntity;
import edu.icet.repository.CustomerRepo;
import edu.icet.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    final CustomerRepo repository;
    final ModelMapper mapper;
    @Override
    public void addCustomer(CustomerDTO customer) {
        repository.save(mapper.map(customer, CustomerEntity.class));
    }


    //from this method -> get all customer data from repository as CustomerEntity and add into list name all
    //then map CustomerEntity into CustomerDTO one by one and add to the customerList and return it
    @Override
    public List<CustomerDTO> getAll() {
        List<CustomerDTO> customerList = new ArrayList<>();
        List<CustomerEntity> all = repository.findAll();

        all.forEach(customerEntity -> {
            customerList.add(mapper.map(customerEntity, CustomerDTO.class));
        });

        return customerList;
    }


    @Override
    public void deleteCustomer(Integer id) {
        repository.deleteById(id);
    }


    @Override
    public void updateCustomer(CustomerDTO customer) {
        repository.save(mapper.map(customer, CustomerEntity.class));
    }


    @Override
    public CustomerDTO searchById(Integer id) {
        return mapper.map(repository.findById(id), CustomerDTO.class);
    }



    @Override
    public List<CustomerDTO> searchByName(String name) {
        List<CustomerEntity> byName = repository.findByName(name);
        List<CustomerDTO> customerList = new ArrayList<>();

        byName.forEach(customerEntity -> {
            customerList.add(mapper.map(customerEntity, CustomerDTO.class));
        });

        return customerList;
    }



    @Override
    public List<CustomerDTO> searchByAddress(String address) {
        List<CustomerEntity> byAddress = repository.findByAddress(address);
        List<CustomerDTO> customerList = new ArrayList<>();

        byAddress.forEach(customerEntity -> {
            customerList.add(mapper.map(customerEntity, CustomerDTO.class));
        });

        return customerList;
    }



    @Override
    public List<CustomerDTO> searchBySalary(String salary) {
        List<CustomerEntity> bySalary = repository.findBySalary(salary);
        List<CustomerDTO> customerList = new ArrayList<>();

        bySalary.forEach(customerEntity -> {
            customerList.add(mapper.map(customerEntity, CustomerDTO.class));
        });

        return customerList;
    }
}
