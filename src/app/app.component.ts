import { Component, OnInit } from '@angular/core';
import {
  format, subMonths, addMonths, getMonth, getYear, getDay, getDaysInMonth, startOfDay, subHours, addHours, subDays, addDays, endOfMonth
} from 'date-fns';

import { faChevronLeft, faChevronRight, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'int-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faTrash = faTrash;

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
    this.createDaysArray(getDaysInMonth(new Date()));

    this.sortReminders();
  }

  getDayOfWeek(day: number): String {
    let date = new Date(getYear(this.selectedMonth), getMonth(this.selectedMonth), day);
    switch (getDay(date)) {
      case 1:
        return 'Monday';
        break;
      case 2:
        return 'Tuesday';
        break;
      case 3:
        return 'Wednesday';
        break;
      case 4:
        return 'Thursday';
        break;
      case 5:
        return 'Friday';
        break;
      case 6:
        return 'Saturday';
        break;
      case 7:
        return 'Sunday';
        break;
      default:
        return 'Error';
        break;
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
      this.createDaysArray(getDaysInMonth(this.selectedMonth));

      this.checkMonthButtons();
    }
  }

  goToNext() {
    if (getMonth(this.selectedMonth) != 11) {
      this.selectedMonth = addMonths(this.selectedMonth, 1);
      this.formattedCurrentMonthAndYear = format(this.selectedMonth, 'MMMM YYYY');
      this.createDaysArray(getDaysInMonth(this.selectedMonth));

      this.checkMonthButtons();
    }
  }

  createDaysArray(days: number): void {
    this.days = [];
    for (let i = 0; i < days; i++) {
      this.days.push({ events: 0 });
    }
  }

  addReminder(): void {
    this.reminders.push({
      title: 'New Reminder',
      date: startOfDay(new Date()),
      color: "Basic"
    });

    this.sortReminders();
    this.showRemindersInCalendar();
  }

  deleteReminder(i: number): void {
    this.reminders.splice(i, 1);

    this.sortReminders();
    this.showRemindersInCalendar();
  }

  showRemindersInCalendar(): void {
    for (let reminder of this.reminders) {
      let day = reminder.date.getDate();
      this.days[day].events += 1;
    }
  }

  sortReminders() {
    this.reminders = this.reminders.sort(function (a, b) {
      let bDate = +new Date(b.date);
      let aDate = +new Date(a.date);
      return aDate - bDate;
    });
  }
}
