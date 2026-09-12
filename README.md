# Home Loan Management System — Angular Frontend

Angular 17 frontend for the Home Loan Management System. It connects to the Spring Boot backend on `http://localhost:8081`.

## Requirements

- Node.js 18+
- npm
- Spring Boot backend running on port 8081

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Main modules

- Login / role-based navigation
- Loan enquiry
- Customer loan application
- Document upload and verification
- Branch-manager approval/rejection
- Account-head sanction-letter workflow
- Email notifications
- EMI calculator

## Backend API

The frontend currently expects these backend endpoints on port 8081, including customer application, enquiry, verification, approval, rejection, and email APIs.

## Source-control notes

`node_modules`, Angular cache, build output, IDE files, and test/spec artifacts are intentionally excluded from the production source package.

Do not commit `application.properties` or any database/SMTP credentials. Use a local configuration file instead.

## Important

The CIBIL endpoint currently generates a simulated score for demonstration purposes; it is not a real credit-bureau integration.
