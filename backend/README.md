# Home Loan Management — Backend

Spring Boot REST API for the Home Loan Management application.

## Responsibilities

- Home loan application CRUD operations
- Customer, address, guarantor, bank-account and document data handling
- Loan enquiry management
- Email notification support
- CIBIL-related processing

## Technology

- Java
- Spring Boot
- Spring Data JPA / Hibernate
- MySQL
- Maven
- JavaMail

## Configuration

Create `src/main/resources/application.properties` locally from `application-example.properties` and provide your own database/email credentials.

**Do not commit credentials or other secrets to the repository.**

## Run

From the `backend` directory:

```bash
mvn spring-boot:run
```

Or run `HomeLoanApplication` from your IDE.
