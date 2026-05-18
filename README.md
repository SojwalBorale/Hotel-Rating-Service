# Hotel-Rating-Service
Microservices project integrating User, Rating, and Hotel services
# Hotel Rating Service - Microservices Project

## 📌 Overview
This project demonstrates a **Spring Boot microservices architecture** for a Hotel Rating System.  
It is designed to showcase backend development skills including REST APIs, service communication, and database integration.

---

## 🏗️ Project Structure
- **User Service** → Manages users and their details.
- **Hotel Service** → Manages hotels and their information.
- **Rating Service** → Manages ratings given by users to hotels.
- **API Gateway** → Routes requests to appropriate microservices.
- **Service Registry (Eureka)** → Enables service discovery.

---

## ⚙️ Tech Stack
- **Backend:** Java, Spring Boot, Spring Cloud
- **Database:** MySQL / PostgreSQL
- **Build Tool:** Maven
- **Frontend (optional):** JSP / React
- **Version Control:** Git & GitHub

---

## 🚀 Features
- Create, update, and fetch **Users**
- Create, update, and fetch **Hotels**
- Add and view **Ratings**
- Microservices communication via REST APIs
- Centralized service discovery with Eureka
- API Gateway for routing


## explaination and questions
- Deep Explanation
- Built as a microservices architecture:
- UserService → manages users.
- HotelService → manages hotels.
- RatingService → manages ratings.
- Each service has its own database (MongoDB/MySQL).
- Services communicate via REST APIs (using RestTemplate/WebClient).
- When fetching a user → system aggregates ratings + hotel details → returns a rich JSON response.

 ## Interview Questions (Hotel-Rating-Service)
- Explain microservices.
- Why separate services instead of monolith?.
- How do services communicate?.
- How did you configure MongoDB in Spring Boot?.
- What challenges did you face with database collections?.
- How do you handle aggregation of data across services?.
- What best practices did you follow in repo hygiene?.
