# Star Wars App

Simple app that allows you to search data based on characters from the Star Wars universe using the https://swapi.dev/ api.

## UI

In here we have a list of all characters, hard-coded in a data file. Selecting one will load the data in a popup modal. It also allows you to search a character by its `ID`. We utilize `typescript` for typing and `mui` for the styling of the components.

To run:

- Navigate to `ui` directory
- Execute `yarn` or `npm install` to start installing necessary packages
- Run the server by executing `yarn start` or `npm start`

## API

In here we have a single api endpoint that calls the `swapi` api to fetch data. We make multiple calls in order to get all the data we need to return. The structure of this api follows a controller pattern. The api runs on `nodejs` and utilizes `typescript` in the backend as well.

To run:

- Navigate to `api` directory
- Execute `yarn` or `npm install` to start installing necessary packages
- Run the server by executing `yarn start` or `npm start`
- To run the server in development mode, execute `yarn dev`, or `npm dev`
