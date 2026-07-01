# Beeceptor Playwright API Automation

## Project Overview

This project is an API automation testing framework built using **Playwright** and **TypeScript**. It automates CRUD (Create, Read, Update, Delete) API testing using Beeceptor mock APIs and follows the **Page Object Model (POM)** design pattern for better code organization and maintainability.

The project validates API responses, HTTP status codes, and JSON data across multiple browsers.

---

## Features

- GET API Testing (Login)
- POST API Testing (Register)
- PUT API Testing (Update)
- PATCH API Testing
- DELETE API Testing
- Page Object Model (POM)
- JSON Response Validation
- HTTP Status Code Validation
- Cross Browser Testing
  - Chromium
  - Firefox
  - WebKit
- HTML Test Report

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Beeceptor Mock API
- Git
- GitHub
- VS Code

---

## Project Structure

```
beeceptor-playwright
│
├── pages
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── UpdatePage.ts
│   ├── PatchPage.ts
│   ├── DeletePage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── register.spec.ts
│   ├── update.spec.ts
│   ├── patch.spec.ts
│   ├── delete.spec.ts
│
├── playwright-report
├── test-results
├── playwright.config.ts
├── package.json
├── package-lock.json
└── README.md
```

---

## Setup Instructions

### Clone Repository

```bash
git clone https://github.com/ShresthTiwari823/beeceptor-playwright.git
```

### Open Project

```bash
cd beeceptor-playwright
```

### Install Dependencies

```bash
npm install
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## Run Tests

Run all tests

```bash
npx playwright test
```

Run Login Test

```bash
npx playwright test tests/login.spec.ts
```

Run Register Test

```bash
npx playwright test tests/register.spec.ts
```

Run Update Test

```bash
npx playwright test tests/update.spec.ts
```

Run Patch Test

```bash
npx playwright test tests/patch.spec.ts
```

Run Delete Test

```bash
npx playwright test tests/delete.spec.ts
```

---

## View HTML Report

```bash
npx playwright show-report
```

---

## Test Scenarios

- Login API Validation
- Register API Validation
- Update API Validation
- Patch API Validation
- Delete API Validation
- HTTP Status Code Verification
- JSON Response Verification

---

## Design Pattern

This project follows the **Page Object Model (POM)** architecture to separate API logic from test cases, improving code readability and maintainability.

---

## Author

**Shresth Tiwari**

GitHub:
https://github.com/ShresthTiwari823