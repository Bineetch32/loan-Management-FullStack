# Loan Management Full Stack

A full-stack Home Loan Management application built with **Angular 17, Spring Boot 2.7.4, Spring Data JPA and MySQL**.

## Project Structure

```text
loan-Management-FullStack/
├── backend/     # Spring Boot REST API
└── frontend/    # Angular 17 application
```

## Backend

- Java 17
- Spring Boot 2.7.4
- Spring MVC / REST
- Spring Data JPA / Hibernate
- MySQL
- Maven
- JavaMail

Runs on `http://localhost:8081`.

## Frontend

- Angular 17
- TypeScript
- Bootstrap
- RxJS
- PDF generation support

Runs on `http://localhost:4200` and expects the backend on port 8081.

## Main Features

- Loan enquiry management
- Customer loan application
- Customer, guarantor, address and bank details
- Multipart upload of loan documents
- Document verification
- Branch-manager approval/rejection
- Sanction-letter/email workflow
- CIBIL-score simulation for demonstration
- EMI calculator

## Running Locally

1. Create the MySQL database used by the backend.
2. Copy `backend/src/main/resources/application-example.properties` to `application.properties` and set your local credentials.
3. Start the Spring Boot backend on port 8081.
4. In `frontend/`, run `npm install` and `npm start`.
5. Open `http://localhost:4200`.

## Security

Real database and SMTP credentials must never be committed to GitHub. Local configuration files are ignored by Git.

> Note: the CIBIL feature generates a simulated score for demonstration/academic use; it is not a real credit-bureau integration.

## Development Status

- [x] Spring Boot backend added and cleaned
- [x] Sensitive local configuration excluded
- [x] Angular frontend source cleaned and prepared
- [x] Loan-document submission flow fixed so the API call happens before page reload
- [x] Email-with-attachment flow fixed so the page reloads only after a successful API response
- [ ] Upload complete Angular source/assets to the GitHub `frontend/` directory
