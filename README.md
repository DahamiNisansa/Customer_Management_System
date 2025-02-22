### 📌 &nbsp; Customer Management System

### 📝 &nbsp; Overview

The Customer Management System is a full-stack web-based application designed to learn and practice CRUD (Create, Read, Update, Delete) and Search operations using the Spring Boot framework. It follows a Layered Architecture to ensure a clear separation of concerns and scalability. This project is built using Spring Boot for the backend, MySQL for database management, and HTML, Bootstrap, and JavaScript for the frontend.

### 🚀 &nbsp; Tech Stack

            🔹 Backend:
                        Java
                        Spring Boot
            
            🔹 Frontend:
                        HTML
                        Bootstrap
                        JavaScript
            
            🔹 Database:
                        MySQL (Managed via WAMP Server)
            
            🔹 API Testing:
                        Postman

### 📦 &nbsp; Libraries Used
      ✅ Spring Boot        →  Builds RESTful web applications.
      ✅ Spring Data JPA    →  Simplifies database operations.
      ✅ Lombok             →  Reduces boilerplate code with automatic getter/setter generation.
      ✅ MySQL Connector j  →  Facilitates seamless database connectivity.
      ✅ ModelMapper        →  Transforms entities into DTOs efficiently.

### 🔥 &nbsp; Features
      ✅ Customer Registration       →  Add new customers with details like name, address, and salary.
      ✅ View Customers              →  Display customer details in a structured table.
      ✅ Update Customer Information →  Modify existing customer data.
      ✅ Delete Customer             →  Remove customer records from the system.
      ✅ Search Functionality        →  Search customers by ID, name, address, or salary.

### 🛠️ &nbsp; System Architecture

            🔹 Layered Architecture → Ensures separation of concerns across:
                    - Presentation Layer (Frontend): Handles UI interactions.
                    - Service Layer: Contains business logic.
                    - Repository Layer: Manages database operations.
                    - API Layer: Handles HTTP requests and responses.
            
            🔹 Dependency Injection & Interface-based Design →
                    - Service layer follows an interface-based approach to ensure loose coupling.
                    - Uses Spring's @Service annotation for automatic dependency injection.
