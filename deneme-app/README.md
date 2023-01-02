# DenemeApp

Game Store Web App

This web app allows users to create and view a list of games.

Getting Started

To get started with this project, follow these steps:

Clone the repository:
Copy code
git clone https://github.com/[USERNAME]/game-store.git
Install the dependencies:
Copy code
npm install
Run the app:
Copy code
ng serve
The app will be running at http://localhost:4200/.

Features

Create a new game: Users can enter the game's name, bundle, owner, and upload an icon. All fields are required, and the owner field must be a valid email address. The bundle field must match the following regex: [A-Za-z0-9]{8}.
View game list: Users can see a list of all the games they have created. Each game in the list displays the game's name, icon, and owner.
Delete a game: Users can delete a game from the list by clicking a button next to the game.

Code Structure

game-data.service.ts: This service handles adding, retrieving, and deleting games from the list.
game-creation.component.ts: This component handles the form for creating a new game. It uses the GameDataService to add the new game to the list.
game-list.component.ts: This component displays the list of games and uses the GameDataService to delete games from the list.
Technologie
s Used

Angular
HTML
CSS
TypeScript

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
