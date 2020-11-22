# UccafeFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Installation

You must have
* Node.js LTS. If you don't have it, [go here](https://nodejs.org/en/) to see how to download it.
* The Angular CLI to work in this project. If you don't have it, [go here](https://cli.angular.io/) to see how to download it.

Make sure you have the dependencies of the project. If you don't have them, run the following command at the project's root to download them: `npm ci`.

To run the project see [this section](#Development-server).

## Important directories

* `src/app/modules/views/`

Here are the view components. This kind of components are going to be used as views.

To create a view component write: `ng generate component modules/views/view-name --module=modules/views/views --export`

Replace `view-name` for the actual name.

After creating a view component go to `src/app/modules/routing/app-routing.module.ts`, import the created view and assign a route to it.

* `src/app/modules/components/`

Here are the general components. This kind of components are not views, but they can be used into a view.

To create a component write: `ng generate component modules/components/component-name --module=modules/components/components --export`

Replace `component-name` for the actual name.

Once done, you can use the new component anywhere.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
