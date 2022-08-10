export interface EventType {
  _id?: string;
  color: string;
  start: string;
  end: string;
  name: string;
  timed: string;
  details: string;
}
export interface DasboardList {
  calendarEvents: EventType[];
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}
