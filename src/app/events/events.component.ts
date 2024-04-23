import { Component } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  calendarDays: Array<{ day: number, inCurrentMonth: boolean, events: Event[] }> = [];
  events: Event[] = [];
  showEventModal = false;
  selectedEvent: Event | null = null;

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(): void {
    // Resets the days array for new month view
    this.calendarDays = [];
    // Determines the number of days in the current month
    const daysInCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    // Determines what day of the week the month starts on
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();

    // Fills the initial empty days
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.calendarDays.push({ day: 0, inCurrentMonth: false, events: [] });
    }

    // Fills the actual days with events
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const eventsOnThisDay = this.events.filter(e => {
        const eventDate = new Date(e.date);
        return eventDate.getDate() === i && eventDate.getMonth() === this.currentMonth;
      }).map(e => {
        // If hour is set, adjust the event's dateTime property
        if (e.hour) {
          return { ...e, dateTime: this.combineDateAndTime(e.date, e.hour) };
        }
        return e;
      });
      this.calendarDays.push({ day: i, inCurrentMonth: true, events: eventsOnThisDay });
    }
  }

    private combineDateAndTime(date: Date, time: string): Date {
      const timeParts = time.split(':');
      return new Date(date.getFullYear(), date.getMonth(), date.getDate(),
                      parseInt(timeParts[0], 10), parseInt(timeParts[1], 10));
    }

  changeMonth(direction: number): void {
    this.currentMonth += direction;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  isToday(day: number, inCurrentMonth: boolean): boolean {
    const today = new Date();
    return inCurrentMonth && day === today.getDate() && this.currentMonth === today.getMonth() && this.currentYear === today.getFullYear();
  }

  openEventForm(day: number, event?: Event, eventClick?: MouseEvent): void {
    if (eventClick) {
      eventClick.stopPropagation(); // Prevent day's click event
    }
    this.selectedEvent = event ? { ...event } : this.getNewEvent(day);
    this.showEventModal = true;
  }

  private getNewEvent(day: number): Event {
    return {
      id: 0, // Assuming 0 is a placeholder for a new event
      title: '',
      description: '',
      date: new Date(this.currentYear, this.currentMonth, day),
      showTo: 'Everyone'
    };
  }

  selectEvent(event: Event, domEvent: MouseEvent): void {
    domEvent.stopPropagation();
    this.selectedEvent = event;
    this.showEventModal = true;
  }

  onEventCreated(event: Event): void {
    if (event.hour) {
      event.dateTime = this.combineDateAndTime(event.date, event.hour);
    } else {
      event.dateTime = event.date;
    }
    this.events.push(event);
    this.generateCalendar();
    this.showEventModal = false;
  }


  deleteEvent(eventId: number, domEvent: MouseEvent): void {
    domEvent.stopPropagation();
    this.events = this.events.filter(event => event.id !== eventId);
    this.generateCalendar();
  }
}

