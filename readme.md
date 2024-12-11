# Cypress API & Front End Testing Assignment

The chalenge was to create a project, utilizing Cypress, to structure and automate tests for both API and Front end E2E for [Serverest](https://github.com/ServeRest/ServeRest).
The project has been built in english, except for the route names that are kept in portuguese to match the documentation. 

##

The folder strucuture has kept the Cypress e2e environment, utilizing two main subfolders:
- api-tests : Housing tests to 3 routes.
- e2e-tests : Housing Front end Login tests.

##
The route /login has an .md file containning an example of test cases that were followed to build the test automation.  

---

As dependencies the project uses:
- [Faker.js](https://fakerjs.dev/) for dynamic data creation.
- [Joi](https://joi.dev/) for Schema validation.
- [Cypress](https://docs.cypress.io/app/get-started/why-cypress)  for test automation.

---
## Features

- **Dynamic User Data**: Automatically generates realistic user details for each test run.
- **Schema Validation**: Validates API responses and request payloads using Joi.
- **Reusable Commands**: Implements Cypress custom commands for cleaner and reusable code.
- **Error Handling**: Robust handling of failed API calls and validation errors.
- **Environment Configurations**: Manages environment variables for API URLs and authentication tokens.

---

## Setup Instructions

To run this project your machine should have installed:
- [Node.js](https://nodejs.org/en) /v.20.11.1 or latest.
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) /v.10.9.2 or latest.

### 1. Clone the Repository
```bash
git clone https://github.com/gabrielvictorio/cypress-e2e-api-assignment.git
````
### 2. Change to project directory
```bash
cd cypress-e2e-api-assignment
```
### 2. Install the Dependencies
```bash
npm install
```
### 3. Run the Tests
Headless Mode
```bash
npx cypress run
```
Cypress UI
```bash
npm cypress open
```