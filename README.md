# SCIM Implementation

## Pre-reqs

To build and run this app locally you will need:

- Install [Node.js](https://nodejs.org/en/)

## Features:

- Nodemon - server auto-restarts when code changes
- Koa v2
- TypeORM (SQL DB) with basic CRUD included
- Swagger decorator (auto generated swagger docs)
- Class-validator - Decorator based entities validation
- Docker-compose ready to go
- Postman (newman) integration tests
- Locust load tests
- Jest unit tests
- Github actions - CI for building and testing the project
- Cron jobs prepared

## Included middleware:

- @koa/router
- koa-bodyparser
- Winston Logger
- JWT auth koa-jwt
- Helmet (security headers)
- CORS

## Getting Started

- Clone the repository

```
git clone --depth=1 https://github.com/awinabi/mankind-scim.git
```

- Install dependencies

```
cd <project_name>
npm install
```

- Run the project directly in TS

```
npm run watch-server
```

- Build and run the project in JS

```
npm run build
npm run start
```

- Run integration or load tests

```
npm run test:integration:local (newman needed)
npm run test:load (locust needed)
```

- Run unit tests

```
npm run test
```

- Run unit tests with coverage

```
npm run test:coverage
```

- Run unit tests on Jest watch mode

```
npm run test:watch
```

## Entities validation

This project uses the library class-validator, a decorator-based entity validation.

For further documentation regarding validations see [class-validator docs](https://github.com/typestack/class-validator).

## Running the build

All the different build steps are orchestrated via [npm scripts](https://docs.npmjs.com/misc/scripts).
Npm scripts basically allow us to call (and chain) terminal commands via npm.
This is nice because most JavaScript tools have easy to use command line utilities allowing us to not need grunt or gulp to manage our builds.
If you open `package.json`, you will see a `scripts` section with all the different scripts you can call.
To call a script, simply run `npm run <script-name>` from the command line.
You'll notice that npm scripts can call each other which makes it easy to compose complex builds out of simple individual build scripts.
Below is a list of all the scripts this template has available:

| Npm Script               | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| `start`                  | Does the same as 'npm run serve'. Can be invoked with `npm start`                               |
| `build`                  | Full build. Runs ALL build tasks (`build-ts`, `lint`, `copy-static-assets`)                     |
| `serve`                  | Runs node on `dist/server/server.js` which is the apps entry point                              |
| `watch-server`           | Nodemon, process restarts if crashes. Continuously watches `.ts` files and re-compiles to `.js` |
| `build-ts`               | Compiles all source `.ts` files to `.js` files in the `dist` folder                             |
| `lint`                   | Runs ESLint check and fix on project files                                                      |
| `copy-static-assets`     | Calls script that copies JS libs, fonts, and images to dist directory                           |
| `test:integration:<env>` | Execute Postman integration tests collection using newman on any env (`local` or `heroku`)      |
| `test:load`              | Execute Locust load tests using a specific configuration                                        |
