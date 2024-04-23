export interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  showTo: 'Everyone' | 'Private' | 'Friends';
  hour?: string; // This should be in 'HH:mm' format
  dateTime?: Date; // A combination of the date and time for display purposes
}
