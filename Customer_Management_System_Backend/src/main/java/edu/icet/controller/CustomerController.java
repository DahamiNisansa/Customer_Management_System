package edu.icet.controller;

import edu.icet.dto.CustomerDTO;
import edu.icet.service.CustomerService;
import jakarta.websocket.server.ServerEndpoint;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customer")
@RequiredArgsConstructor
@CrossOrigin

public class CustomerController {

    final CustomerService service;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
//  path for this method :- http://localhost:8080/customer/add
    public void addCustomer(@RequestBody CustomerDTO customer){
        service.addCustomer(customer);
    }

    @GetMapping("/get-all")
    public List<CustomerDTO> getAll(){
        return service.getAll();
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteCustomer(@PathVariable Integer id){
        service.deleteCustomer(id);
    }

    @PutMapping("/update-customer")
    public void updateCustomer(@RequestBody CustomerDTO customer){
        service.updateCustomer(customer);
    }



    //search by id
    /* @GetMapping("/search-by-id/{id}")
    public CustomerDTO searchById(@PathVariable Integer id){
        return service.searchById(id);
    } */
    @GetMapping("/search-customer-id")
    public CustomerDTO searchById(@RequestParam(name = "query") Integer id){
        return service.searchById(id);
    }


    //search by name
    /* @GetMapping("/search-by-name/{name}")
    public List<CustomerDTO> searchByName(@PathVariable String name){
        return service.searchByName(name);
    } */
    @GetMapping("/search-customer-name")
    public List<CustomerDTO> searchByName(@RequestParam(name = "query") String name){
        return service.searchByName(name);
    }


    //search by address
    /* @GetMapping("/search-by-address/{address}")
    public List<CustomerDTO> searchByAddress(@PathVariable String address){
        return service.searchByAddress(address);
    } */
    @GetMapping("/search-customer-address")
    public List<CustomerDTO> searchByAddress(@RequestParam(name = "query") String address){
        return service.searchByAddress(address);
    }


    //search by salary
    /* @GetMapping("/search-by-salary/{salary}")
    public List<CustomerDTO> searchBySalary(@PathVariable String salary){
        return service.searchBySalary(salary);
    } */
    @GetMapping("/search-customer-salary")
    public List<CustomerDTO> searchBySalary(@RequestParam(name = "query") String salary){
        return service.searchBySalary(salary);
    }

}
