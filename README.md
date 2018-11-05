## Instructions

The goal of this exercise is to create a demo calendar application using Angular.

### The Task

You should start by rendering a single month view of a calendar for the current month – along with the lines of the calendar.png in this repository

### Features & Requirements:

- [x] Ability to add a new “reminder” (max 30 chars) for a user entered day and time.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select a color when creating a reminder and display it appropriately.
- [x] Properly handle overflow when multiple reminders appear on the same date.
- [x] Ability to edit reminders – including changing text, day and time & color.
- [x] Ability to delete reminders.
- [x] Expand the calendar to support more than the current month.

### Notes:

* The data should be retained across different page views, but it’s not necessary to persist it beyond a browser refresh.
* This is a coding activity and not a design activity. That’s not to say we don’t appreciate good design or that we don’t value those skills if you have them! It’s just that it won’t have a high value when scoring this particular project.

*-----------------------------------*

### Installation:

This app has been developed in Angular. To Test it NPM, AngularCLI, and Yarn are required.

- 1st Step: Install NPM from https://www.npmjs.com/get-npm

- 2nd Step: Install Angular CLI: https://angular.io/cli

- 3rd Step: Install Yarn: https://yarnpkg.com/en/docs/install#windows-stable

- 4th Step: Open a terminal on the project root derictory and run: "npm install"

- 5th Step: On the same terminal run (https://fontawesome.com/how-to-use/on-the-web/using-with/angular): "yarn add @fortawesome/fontawesome-svg-core \
  yarn add @fortawesome/free-solid-svg-icons \
  yarn add @fortawesome/angular-fontawesome"

- 6th Step: On the same terminal run the following command: "ng serve --open"


### Known Issues:

- 1) The calendar doesn't look like mockup (Monday to Sunday should be in the corresponding columns).
- 2) Time of the reminders its not considered, since its not implemented on Angular Material's Datepicker (https://github.com/angular/material2/issues/5648).


### TODO's:
- 1) Reminders shouldn't be deleted when changing a month (add the "Month" property to the object "reminder").

### Bugs:
- 1) The quantity of dates per month seems to be broken (it was working before).
- 2) The sort of reminders is broken (it was working before).