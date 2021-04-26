import { EventEnum, SeverityType } from '@App/types';

const severityMap = {
  HIGH: '#d04949',
  MEDIUM: 'palegoldenrod',
  LOW: 'paleturquoise',
};

const eventsMap = {
  food_intake_observation: 'Food intake observation',
  catheter_observation: 'Catheter observation',
  toilet_visit_recorded: 'Toilet visits recorded',
  incontinence_pad_observation: 'Incontinence pad observation',
  general_observation: 'General observation',
  physical_health_observation: 'Physical health observation',
  mood_observation: 'Mood observation',
  concern_raised: 'Concern raised',
  regular_medication_taken: 'Regular medication taken',
  no_medication_observation_received: 'No medication observation received',
  regular_medication_maybe_taken: 'Regular medication maybe taken',
  regular_medication_partially_taken: 'Regular medication_partially taken',
  alert_raised: 'Alerts raised',
  alert_qualified: 'Alerts qualified',
};

export const getSeverityColor = (severity: SeverityType) => {
  return severityMap[severity];
};

export const formatEvent = (event: EventEnum) => {
  return eventsMap[event];
};

export const truncate = (text: string, bound: number): string => {
  return text.length > bound ? text.substr(0, bound) + '...' : text;
};

export const parseEvents = (events: string[]) => {
  return events.map(e => JSON.parse(e));
};
