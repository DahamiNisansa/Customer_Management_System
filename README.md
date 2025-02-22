# Customer_Management_System
The Customer Management System is a full-stack web-based application designed to learn and practice CRUD(Create, Read, Update, Delete) and Search operations with Spring Boot framework. It follows a Layered Architecture for clear separation of concerns and scalability. The system is developed using Spring Boot for the backend, MySQL for database management, HTML, Bootstrap, and JavaScript for the frontend. 

GitHub Repository :- https://github.com/DahamiNisansa/Customer_Management_System

Key Technologies :-

Backend: Java, Spring Boot
Frontend: HTML, Bootstrap, JavaScript
Database: MySQL
API Testing: Postman
Tools: WAMP Server for local database setup

Libraries :-

spring-boot-starter-web : Builds RESTful web applications.
spring-boot-starter-data-jpa : Simplifies database operations.
Lombok : Reduces boilerplate code with automatic getter/setter generation.
MySQL-connector-j : Facilitates seamless database connectivity.
model mapper : Transforms entities into DTOs efficiently.

Functional Features :-

Customer Registration – Add new customers with details like name, address, and salary.
View Customers – Display customer details in a structured table.
Update Customer Information – Modify existing customer data.
Delete Customer – Remove customer records from the system.
Search Functionality – Search customers by ID, name, address, or salary.

Key Features:

RESTful API – Exposes backend functionality via HTTP methods (GET, POST, PUT, DELETE).
Layered Architecture – Ensures separation of concerns across Presentation, Service, Repository, and API layers.
Dependency Injection & Interface-based Design – The service layer follows an interface-based approach with an implementation class to ensure loose coupling. Spring's @Service annotation enables automatic dependency injection.
