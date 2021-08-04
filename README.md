An example repo to demonstrate the issues I've been encountering with Module Federation with NextJS

## Getting Started
1. run npm install `@module-federation/nextjs-mf --registry https://r.privjs.com` with npm 7 or install it directly in each folder/app, note the plugin is not free.
2. run `npm start` and browse to http://localhost:3000 (Checkout app) or http://localhost:3001 (Home app)

## Bugs that I've encountered:

**Attempting to access the Home app at `localhost:3001` will result in the federated components failing to load from the Checkout app**


Federated components will load properly if you start at `http://localhost:3001/checkout`, and use the navigation links to switch between `http://localhost:3001/` and `http://localhost:3001/checkout`


But when reload the page in route federated the application show error
