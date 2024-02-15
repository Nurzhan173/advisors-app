# Advisors app

React application with node js service for getting random advisors

## Table of Contents

- [Installation and run project](#installation)
- [Running Tests](#running-tests)
- [Scripts](#scripts)
- [Folder structure](#folder-structure)
- [Dev Dependencies](#dev-dependencies)
- [Storybook](#storybook)


## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Nurzhan173/advisors-app.git
   ```
2. Install the required dependencies using npm:
   ```sh
   npm install
   ```
3. Run node js service
   ```sh
   cd service
   node service.js
   ```
   Running on http://localhost:3001 in your browser.


4. Run frontend app (in new terminal)
    ```sh
    npm start
    ```
   Visit http://localhost:3000 in your browser to view the app.



## Running Tests
To run unit tests for this project, you can use the following command:
```sh
npm run test
```

Coverage:
```sh
 src/components/Avatar        |     100 |      100 |     100 |     100 |                   
  Avatar.tsx                  |     100 |      100 |     100 |     100 |                   
 src/components/Button        |     100 |      100 |     100 |     100 |                   
  Button.tsx                  |     100 |      100 |     100 |     100 |                   
 src/components/Card          |     100 |       50 |     100 |     100 |                   
  Card.tsx                    |     100 |       50 |     100 |     100 | 30                
 src/components/Icons         |   53.62 |       50 |      50 |   53.62 |                   
  LanguageIcon.tsx            |       0 |        0 |       0 |       0 | 1-32    
```

## Scripts
* **start**: Start the development server.
* **build**: Build the production-ready app.
* **test**: Run tests using Vitest and Jest.
* **coverage**: Run tests with coverage report.
* **eject**: Eject from Create React App configuration.

## Folder structure
* **src**: Contains the source code for the React app.
* **components**: React components.
* **hooks**: Custom hooks.
* **stores**: MobX stores.
* **styles**: Stylesheets. 
* **utils**: Utility functions.
* **public**: Public assets.
* **server**: Express server files.
* **tests**: Test files.

## Dev Dependencies
* @testing-library/jest-dom: Testing utilities for Jest.
* @testing-library/react: Testing utilities for React.
* @vitest/coverage-v8: V8 coverage tool for Vitest.
* jsdom: In-memory DOM implementation.
* vitest: Test runner for JavaScript applications.

## Storybook
Running Storybook is used to showcase and test individual components. To run Storybook, use the following command:
```sh
npm run storybook
```
Visit http://localhost:6006/ in your browser to view the Storybook.

