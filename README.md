# Playwright JavaScript Course

A hands-on learning project for practicing **web test automation with
JavaScript and Playwright**.

This repository contains automated test exercises, reusable page-related
code, test data, and Playwright configuration created while learning and
improving UI test automation skills.

## Tech Stack

-   **JavaScript** --- programming language
-   **Playwright Test** --- browser automation and test runner
-   **Node.js / npm** --- runtime and package management
-   **Allure Playwright** --- reporting integration dependency

## Project Structure

``` text
playwright_javascript_course/
├── .github/
│   └── workflows/       # GitHub Actions workflows
├── assets/              # Supporting project assets
├── pages/               # Page-related modules
├── tests/               # Automated test files
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js  # Playwright configuration
├── testdata.json         # Test data
└── testlogin.json        # Login test data
```

## Getting Started

### 1. Clone the repository

``` bash
git clone https://github.com/RuslanG13/playwright_javascript_course.git
```

### 2. Open the project folder

``` bash
cd playwright_javascript_course
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Install Playwright browsers

``` bash
npx playwright install
```

## Running Tests

Run all tests:

``` bash
npx playwright test
```

Run tests in Chromium:

``` bash
npx playwright test --project=chromium
```

Run a specific test file:

``` bash
npx playwright test tests/example.spec.js
```

Run tests with the Playwright UI:

``` bash
npx playwright test --ui
```

Open the HTML report after a test run:

``` bash
npx playwright show-report
```

> Replace `tests/example.spec.js` with the actual test file name in the
> project.

## Playwright Configuration

The project configuration is stored in `playwright.config.js`.

Current configuration includes:

-   Test directory: `./tests`
-   Browser project: Chromium (Desktop Chrome)
-   Test timeout: 45 seconds
-   Navigation timeout: 40 seconds
-   HTML reporter
-   Screenshot capture on test failure
-   Video recording
-   Trace collection for debugging and test analysis
-   CI-specific retry and worker settings

## Learning Goals

The project is intended for practicing and developing skills in:

-   Writing automated UI tests with Playwright
-   Working with locators and web page elements
-   Interacting with forms, buttons, menus, and navigation
-   Handling test data and data-driven tests
-   Organizing test code into reusable page-related modules
-   Configuring browser projects and test execution
-   Debugging failed tests with screenshots, videos, and traces
-   Working with test reports

## Author

**Ruslan Gudenko**

GitHub: [@RuslanG13](https://github.com/RuslanG13)

------------------------------------------------------------------------

This repository is a personal learning project and is updated as new
Playwright and JavaScript topics are explored.
