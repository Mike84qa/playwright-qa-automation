# Playwright QA Automation Portfolio

A QA automation portfolio project built with **Playwright** and **TypeScript**, demonstrating maintainable end-to-end testing of an e-commerce web application.

The framework applies the **Page Object Model (POM)** design pattern to separate test scenarios from page-specific implementation and provides automated coverage across authentication, product validation, shopping cart operations, and the complete checkout flow.

The project also includes **GitHub Actions CI** for automated test execution.

## Current Status

- ✅ 6 automated end-to-end test scenarios
- ✅ 18 cross-browser test executions
- ✅ Chromium, Firefox, and WebKit coverage
- ✅ Page Object Model (POM) architecture
- ✅ Complete e-commerce checkout flow automation
- ✅ Positive and negative authentication testing
- ✅ Product and shopping cart validation
- ✅ GitHub Actions CI integration

### Latest Local Test Run

```text
18 passed
Chromium · Firefox · WebKit
```

## Technologies

- TypeScript
- Playwright
- Node.js
- Git & GitHub
- GitHub Actions

## Project Structure

```text
tests/
├── data/
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
└── login.spec.ts
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

The project demonstrates:

- Page Object Model (POM)
- Reusable page methods
- Playwright locators
- Assertions and validations
- Dynamic product selection using locators and filters
- TypeScript types and asynchronous operations
- End-to-end user flow automation
- HTML test reporting
- Source control with Git

## Continuous Integration

The repository includes a **GitHub Actions** workflow for automated test execution.

## Project Status

This project is actively maintained as part of my public QA Automation portfolio.

Current coverage focuses on end-to-end e-commerce scenarios using Playwright and TypeScript.

Planned improvements include expanded negative testing, reusable test fixtures, API testing, and additional CI/CD capabilities.
