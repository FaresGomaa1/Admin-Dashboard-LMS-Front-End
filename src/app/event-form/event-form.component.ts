import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent {
  @Input() event: Event = this.getEmptyEvent(); // Initialized with a default empty event
  @Output() eventCreated = new EventEmitter<Event>();
  @Output() formCancelled = new EventEmitter<void>();

  private getEmptyEvent(): Event {
    // Returns a new empty event object
    return { id: 0, title: '', description: '', date: new Date(), showTo: 'Everyone' };
  }

  submitEvent(): void {
    if (this.event) {
      this.eventCreated.emit(this.event);
      console.log('Event created: ', this.event);
    }
    this.resetForm();
  }

  resetForm(): void {
    this.event = { id: 0, title: '', description: '', date: new Date(), showTo: 'Everyone' };
  }

  cancel(): void {
    this.formCancelled.emit();
    this.resetForm();
  }
}
