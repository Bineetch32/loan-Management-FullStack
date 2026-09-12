# Loan Management Full Stack

A full-stack Home Loan Management application built with **Spring Boot, Spring Data JPA, MySQL and Angular**.

## Project Structure

```text
loan-Management-FullStack/
├── backend/     # Spring Boot REST API
└── frontend/    # Angular application (to be added)
```

## Backend

The backend provides REST APIs for:

- Home loan application management
- Customer and guarantor details
- Address and bank account details
- Document details
- Loan enquiry management
- Email notification support
- CIBIL-related processing

### Backend Tech Stack

- Java
- Spring Boot
- Spring MVC / REST
- Spring Data JPA / Hibernate
- MySQL
- Maven
- JavaMail

## Running the Backend

1. Create a MySQL database.
2. Copy `backend/src/main/resources/application-example.properties` to `application.properties`.
3. Set your local database and email credentials in `application.properties`.
4. Run the Spring Boot application using your IDE or Maven.

The application exposes REST endpoints that can be consumed by the Angular frontend.

## Configuration & Security

Real passwords, database credentials, email credentials and other secrets should **never** be committed to GitHub. Local configuration files containing secrets are ignored by Git.

## Development Status

- [x] Spring Boot backend added
- [x] Backend structure organized
- [x] Sensitive local configuration excluded
- [ ] Angular frontend
- [ ] Full-stack integration documentation
