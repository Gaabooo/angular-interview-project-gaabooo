import { Component, OnInit } from '@angular/core';
import { format, subMonths, addMonths, getMonth, getDaysInMonth } from 'date-fns';

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

  reminders: any[];

  constructor() { }

  ngOnInit() {
    this.selectedMonth = new Date();
    this.formattedCurrentMonthAndYear = format(new Date(), 'MMMM YYYY');
    this.checkMonthButtons();
    this.days = Array(getDaysInMonth(new Date()));
  }

  getCurrentMonth() {

  }

  goToMonth() {

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

  }

  deleteReminder() {

  }

  sortReminders() {
    this.reminders = this.reminders.sort(function (a, b) {
      let bstart = +new Date(b.start);
      let astart = +new Date(a.start);
      return astart - bstart;
    });
  }
}
