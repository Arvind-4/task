## 📦 Tech Stack:

- [Express Js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [Node.js](https://nodejs.org/en/) - Node.js is an open-source, cross-platform JavaScript runtime environment.
- [MongoDB](https://www.mongodb.com/) - For the next generation of intelligent applications.
- [Typescript](https://www.typescriptlang.org/) - JavaScript with syntax for types.
- [Yup](https://github.com/jquense/yup) - Dead simple Object schema validation.
- [Cyclic sh](https://www.cyclic.sh) - Deploy Fullstack Javascript Apps: Front-end, Backend, Database, Scheduled tasks. All running with zero-config.

## Postman Collection:

Link to the [Collection](https://www.postman.com/satellite-administrator-13103485/workspace/plotline-tasks)

## Context:

- The company offers various products and services, each with its own pricing.
- A user can create his account, add/remove items to/from their cart, and view his total bill during checkout.
- Integrate tax calculation based on the price range of the product using the following rules:
- Apply Tax PA if the price range of the product is greater than 1000 and less than or equal to 5000. The tax percentage should be 12% of the price.
- Apply Tax PB if the price of the product is above 5000. The tax percentage should be 18% of the price.
- Apply Tax PC to all products with a flat tax amount of 200.
- Integrate tax calculation based on the price range of the services using the following rules:
- Apply Tax SA if the price range of the service is greater than 1000 and less than or equal to 8000. The tax percentage should be 10% of the price.
- Apply Tax SB if the price of the service is above 8000. The tax percentage should be 15% of the price.
- Apply Tax SC to all services with a flat tax amount of 100.
- The tax should be applied to each product/service individually, not on the entire bill.

## Must Haves:

- The server should have endpoints to enable the following functionalities for users:
- Create an account.
- Fetch all products and services information with their prices.
- Add a product or service to the cart.
- Remove a product or service from the cart.
- Clear the cart.
- View total bill (should include price, quantity, and tax on each item as well as total value of selected items)
- Confirm the order

## Good to have:

- Additional API for admin to see all the orders.
- Appropriate test cases to simulate practical scenarios that you would want to test the system for.

#### Note: Use an appropriate database to handle the problem.

- Using Mongo DB for the given Use Case.

## Getting Started:

- Clone Repo

```bash
mkdir plotline-tasks
cd plotline-tasks
git clone https://github.com/Arvind-4/Plotline-Task-Arvind .
```

- Install Dependencies

```bash
npm install
```

- Copy contents from .env.example to .env
- Add Your credentials to the .env file <br />

- Run Dev Server

```bash
npm run dev
```
