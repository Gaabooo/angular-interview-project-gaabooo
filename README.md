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

### Testing Instructions:

This app has been developed in Angular. To Test it NPM and Angular are required.

- 1st Step: Install NPM from https://www.npmjs.com/get-npm

- 2nd Step: Install Angular CLI: https://angular.io/cli

- 3rd Step: Open a terminal on the project root directory and run the following commands: 
-- a. "npm install" 
-- b. "ng serve --open"

### Known Issues:

- 1) Click twice to open certain date (If one date is open, I have to deselect it with one click and click the date I want to open again). - Priority: Low
- 2) The colors edition seems to be working wrongly. If you create a new reminder and change its colour it would change all the created reminders' colors. - Priority: Medium/High (In Progress)
