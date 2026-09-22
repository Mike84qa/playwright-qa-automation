# Playwright QA Automation Portfolio

A QA automation portfolio project built with **Playwright** and **TypeScript**, demonstrating maintainable end-to-end testing of an e-commerce web application.

The framework applies the **Page Object Model (POM)** design pattern to separate test scenarios from page-specific implementation and provides automated coverage across authentication, product validation, shopping cart operations, and the complete checkout flow.

The project also includes **GitHub Actions CI** for automated test execution.

## Current Status

- ✅ 6 automated UI end-to-end test scenarios
- ✅ 18 cross-browser UI test executions
- ✅ 5 REST API tests
- ✅ 23 total automated test executions
- ✅ Chromium, Firefox, and WebKit coverage
- ✅ Dedicated Playwright API test project
- ✅ Page Object Model (POM) architecture
- ✅ Complete e-commerce checkout flow automation
- ✅ Positive and negative testing
- ✅ GitHub Actions CI integration

### Latest Test Run

```text
23 passed

UI: 18 cross-browser executions
API: 5 REST API tests

Chromium · Firefox · WebKit · API
```

## Technologies

- TypeScript
- Playwright
- Playwright APIRequestContext
- REST API Testing
- Node.js
- Git & GitHub
- GitHub Actions

## Project Structure

```text
tests/
├── api/
│   └── products-api.spec.ts
├── data/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
└── login.spec.ts

playwright.config.ts
```

## Automated Test Coverage

The 6 automated scenarios collectively cover:

- Successful login with valid credentials
- Login validation with invalid credentials
- Product list and price validation
- Adding a product to the shopping cart
- Shopping cart content validation
- Removing a product from the cart
- Complete checkout flow
- Customer information entry
- Product and price validation during checkout
- Successful order completion validation

## API Test Coverage

The project includes a dedicated Playwright API test suite using the DummyJSON REST API.

Current API coverage includes:

- GET product list — status and response body validation
- GET non-existing product — 404 negative scenario
- POST new product — response data and generated ID validation
- PUT existing product — update validation
- DELETE product — deletion response validation

API tests run through a dedicated Playwright project and are executed once per test run, independently of the browser-based UI projects.

## End-to-End Checkout Flow

```text
Login
  ↓
Inventory
  ↓
Add Product
  ↓
Shopping Cart
  ↓
Checkout
  ↓
Customer Information
  ↓
Order Overview
  ↓
Product & Price Validation
  ↓
Finish Order
  ↓
Order Completion Validation
```

## Running the Tests

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

Run all tests:

```bash
npx playwright test
```

Run tests in Chromium:

```bash
npx playwright test tests/login.spec.ts --project=chromium
```

Run in headed mode:

```bash
npx playwright test --headed
```

Open the HTML report:

```bash
npx playwright show-report
```

## Automation Design

- REST API testing with Playwright
- Positive and negative API validation
- Dedicated UI and API Playwright projects

## Continuous Integration

The repository includes a **GitHub Actions** workflow for automated test execution.

## Project Status

This project is actively maintained as part of my public QA Automation portfolio.

Current coverage includes cross-browser end-to-end UI automation and REST API testing using Playwright and TypeScript.

The test architecture separates browser-based UI projects from API testing, with automated execution through GitHub Actions CI.

Planned improvements include expanded negative testing, reusable test fixtures, and additional CI/CD capabilities.