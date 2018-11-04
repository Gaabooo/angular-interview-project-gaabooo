import { Component, OnInit } from '@angular/core';
import {
  format, subMonths, addMonths, getMonth, getYear, getDay, setMonth, getDaysInMonth, startOfDay, subHours, addHours, subDays, addDays, endOfMonth, startOfYear, endOfYear
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
  startOfYear: Date = startOfYear(new Date());
  endOfYear: Date = endOfYear(new Date());

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
    this.resetDaysArray();
    this.sortReminders();
    this.showRemindersInCalendar();
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
      default:
        return 'Sunday';
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
      this.resetDaysArray();
      // TODO: Add Month to the reminder's logic.
      this.reminders = [];
      this.checkMonthButtons();
    }
  }

  goToNext() {
    if (getMonth(this.selectedMonth) != 11) {
      this.selectedMonth = addMonths(this.selectedMonth, 1);
      this.formattedCurrentMonthAndYear = format(this.selectedMonth, 'MMMM YYYY');
      this.resetDaysArray();
      // TODO: Add Month to the reminder's logic.
      this.reminders = [];
      this.checkMonthButtons();
    }
  }

  resetDaysArray(): void {
    let daysInMonth = getDaysInMonth(this.selectedMonth.getMonth());
    this.days = [];
    for (let i = 0; i < daysInMonth; i++) {
      this.days.push({ events: 0 });
    }
  }

  addReminder(): void {
    this.reminders.push({
      title: 'New Reminder',
      date: setMonth(new Date(), this.selectedMonth.getMonth()),
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
    this.resetDaysArray();
    for (let reminder of this.reminders) {
      let day = reminder.date.getDate();
      let month = getMonth(reminder.date);
      if (getMonth(this.selectedMonth) == month) {
        this.days[day - 1].events += 1;
      }
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
