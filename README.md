## [Heroku Live app](https://young-basin-18669.herokuapp.com/)

## At the root level

These commands will initate the processes

- `npm run start` - will run the back end server
- `npm run develop` - will run React development server and the server with nodemon
- `npm run seed` - will go into the server dir and seed the files
- `npm run install` - will install dependencies at root, server, and client level

"scripts": {
"start": "node server/server.js",
"develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
"install": "cd server && npm i && cd ../client && npm i",
"seed": "cd server && npm run seed"
}

## Front End: React

Start command - `npm run watch`

localhost:3000

"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},

## Back End: GraphQL

Start command - `npm start`

localhost:3001

"scripts": {
"start": "node server.js",
"watch": "nodemon",
"seed": "node seeders/seeds.js"
},

## Seeder in server

Seed command - `npm run seed`

# Contributions by:

DeveloperDuckArroyo

[Email](mailto:DeveloperDuckArroyo@gmail.com)

[Portfolio](https://github.com/DuckArroyo/portfolio)

[React Portfolio](http://DuckArroyo.github.io/reactPortfolio)

[GitHub](https://github.com/DuckArroyo)

[Twitter @DevDuckArroyo](https://twitter.com/DevDuckArroyo)

[LinkedIn](https://www.linkedin.com/in/duckarroyo)

[CodePen](https://codepen.io/DeveloperDuckArroyo)
