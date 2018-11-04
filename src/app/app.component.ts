import { Component, OnInit } from '@angular/core';
import {
  format, subMonths, addMonths, getMonth, getYear, getDaysInMonth, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday, isSunday, startOfDay,
  subHours, addHours, subDays, addDays, startOfMonth, endOfMonth
} from 'date-fns';

import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'int-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  today: Date = new Date();
  selectedMonth: Date;
  formattedCurrentMonthAndYear: String;
  disabledPreviousButton: Boolean;
  disabledNextButton: Boolean;
  days: any[];


  colors: any[] = ['Primary', 'Accent', 'Warn', 'Basic'];

  reminders: any[] = [
    {
      date: new Date(),
      title: 'Todays mock event',
      color: 'Accent'
    },
    {
      date: subHours(subDays(endOfMonth(new Date()), 3), 12),
      title: 'Some Mock event',
      color: 'Primary'
    },
    {
      date: addHours(subDays(endOfMonth(new Date()), 10), 3),
      title: 'Another mock event',
      color: 'Warn'
    },
    {
      date: addHours(addDays(startOfDay(new Date()), 15), 20),
      title: 'Yet another mock event',
      color: 'Basic'
    }
  ];


  constructor() { }

  ngOnInit() {
    this.selectedMonth = new Date();
    this.formattedCurrentMonthAndYear = format(new Date(), 'MMMM YYYY');
    this.checkMonthButtons();
    this.days = Array(getDaysInMonth(new Date()));

    this.sortReminders();
  }

  getCurrentMonth() {

  }

  // This should Be refactored or implemented in date-fns better
  getDayOfWeek(day: number): String {
    let date = new Date(getYear(this.selectedMonth), getMonth(this.selectedMonth), day);

    if (isMonday(date)) {
      return 'Monday'
    }
    if (isTuesday(date)) {
      return 'Tuesday'
    }
    if (isWednesday(date)) {
      return 'Wednesday'
    }
    if (isThursday(date)) {
      return 'Thursday'
    }
    if (isFriday(date)) {
      return 'Friday'
    }
    if (isSaturday(date)) {
      return 'Saturday'
    }
    if (isSunday(date)) {
      return 'Sunday'
    }
  }

  checkMonthButtons() {
    if (getMonth(this.selectedMonth) == 0) {
      this.disabledPreviousButton = true;
    } else {
      this.disabledPreviousButton = false;
      if (getMonth(this.selectedMonth) == 11) {
        this.disabledNextButton = true;
      } else {
        this.disabledNextButton = false;
      }
    }
  }

  goToPrevious(date: Date) {
    if (getMonth(this.selectedMonth) != 0) {
      this.selectedMonth = subMonths(this.selectedMonth, 1);
      this.formattedCurrentMonthAndYear = format(this.selectedMonth, 'MMMM YYYY');
      this.days = Array(getDaysInMonth(this.selectedMonth));

      this.checkMonthButtons();
    }
  }

  goToNext() {
    if (getMonth(this.selectedMonth) != 11) {
      this.selectedMonth = addMonths(this.selectedMonth, 1);
      this.formattedCurrentMonthAndYear = format(this.selectedMonth, 'MMMM YYYY');
      this.days = Array(getDaysInMonth(this.selectedMonth));

      this.checkMonthButtons();
    }
  }

  addReminder() {
    this.reminders.push({
      title: 'New Reminder',
      date: startOfDay(new Date()),
      color: "Basic"
    });

    this.sortReminders();
  }

  deleteReminder() {

  }

  sortReminders() {
    this.reminders = this.reminders.sort(function (a, b) {
      let bDate = +new Date(b.date);
      let aDate = +new Date(a.date);
      return aDate - bDate;
    });
  }
}
