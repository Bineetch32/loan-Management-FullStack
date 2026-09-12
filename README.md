# Home Loan Management System

A full-stack Home Loan Management System built with **Angular 17** and **Spring Boot 2.7.4**, with MySQL persistence and email-notification support.

## Project Structure

```text
loan-Management-FullStack/
├── frontend/     # Angular 17 application
└── backend/      # Spring Boot REST API
```

## Technology Stack

### Frontend
- Angular 17
- TypeScript
- RxJS
- HTML / SCSS
- Angular Router and Forms

### Backend
- Java 17
- Spring Boot 2.7.4
- Spring Data JPA / Hibernate
- Maven
- MySQL
- JavaMail / SMTP

## Main Features

- Role-based loan-management workflow
- Customer loan enquiry
- Customer home-loan application
- Multipart upload of required loan documents
- Document verification / unverification
- Branch-manager approval and rejection
- CIBIL score simulation for demonstration
- Sanction-letter workflow
- Email notifications and attachment support
- EMI calculator

## Run Locally

### 1. Start the backend

```bash
cd backend
mvn spring-boot:run
```

The backend runs on:

`http://localhost:8081`

Before starting it, configure your local database and SMTP settings. **Do not commit credentials.** Use `application.properties` locally; it is ignored by Git.

An example configuration is provided at:

`backend/src/main/resources/application-example.properties`

### 2. Start the frontend

```bash
cd frontend
npm install
npm start
```

Open:

`http://localhost:4200/`

The Angular application expects the Spring Boot backend on port `8081`.

## Source-Control Notes

The repository intentionally excludes generated/dependency files such as:

- `node_modules/`
- Angular cache
- Maven `target/`
- IDE metadata
- Local `application.properties`
- Database/SMTP credentials

## Important

The CIBIL functionality is a **simulated/demo implementation** and is not connected to a real credit bureau.

## Security

Never commit passwords, API keys, SMTP app passwords, or database credentials to GitHub. If a credential has ever been exposed in source code, revoke/rotate it immediately.
