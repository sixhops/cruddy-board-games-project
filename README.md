# Cruddy Board Games
You will be writing an app that stores a list of board games and their descriptions in a Postgres database. The website needs to support basic CRUD operations (create, read, update and delete) through a RESTful interface using HTTP methods (GET, POST, PUT, DELETE). We will be using `sequelize` to help us with our database operations.

HTML forms and links **DO NOT** support HTTP methods PUT and DELETE, so jQuery is used to intercept user interactions when someone tries to submit an edit form or clicks on a delete link. jQuery uses .preventDefault() to halt the normal action and creates an AJAX request instead.

![screenshot](screenshot.png)

## Prepare the local project
1. Fork and Clone this repo.
2. Go into the local project folder and use 'npm install' to install dependencies.
3. Use `npm start` to run the app with `nodemon`.
4. Visit the page running at <http://localhost:3000>

## Installation of Sequelize and Postgres driver
1. The `sequelize-cli` should already be installed globally.
2. In the project folder, run `npm install --save sequelize pg@6.4.2 pg-hstore`
3. NOTE: we must use pg@6.4.2 because the pg@7 driver is not supported by sequelize.

## Initialization of Sequelize
1. Create a new database for your app: `createdb cruddy_board_games`
2. Initialize sequelize for this project: `sequelize init`
3. Update the config.json file to reflect your database name and dialect.
4. Create a new model named `games` with columns name:string, description:string
  * `sequelize model:create --name games --attributes name:string,description:string`
5. Verify that the migrations and models were generated.
6. Run the migration script: `sequelize db:migrate`

## Task
Implement the routing for all the routes in the next section. Your routes will provide the framework for how the app can access the database. For example, you will create a route to list all games and this route will use sequelize to retrieve all game records from the games table and return that data in an EJS file to the browser.

Suggested order of operations:

1. Do the GET routes first. Then POST, and finally PUT and DELETE.
2. For each route:
    1. Write the routing logic in `app.js`
    2. Create the EJS template inside the folder `views/games/`
    3. Pass data from the route handler in `app.js` to the template (`res.render`)
    4. If required, listen for events in JS (`static/js/main.js`) and use AJAX.

## Full RESTful Routing

| Verb | Path | Action | Used for |
|------|------|--------|----------|
| GET | /games | index | display a list of all games |
| GET | /games/new | new | return an HTML form for creating a new game |
| POST | /games | create | create a new game (using form data from /games/new) |
| GET | /games/:name | show | display one specific game |
| GET | /games/:name/edit | edit | return an HTML form for editing one game |
| PUT | /games/:name | update | update one specific game (using form data from /games/:name/edit) |
| DELETE | /games/:name | destroy | deletes one specific game |

## BONUS
* Use gamesWithNull.json instead of games.json. How will you make sure you're using an object instead of a null value?
* Replace synchronous I/O functions with asynchronous. (fs.readFile instead of fs.readFileSync)
* Use a database instead of `games.json`

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
