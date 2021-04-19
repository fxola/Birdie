import { Request } from 'express';
import {
  MetabolismEvents,
  WellbeingEvents,
  AlertEvents,
  MedicationEvents,
  EventTypes,
} from '../types';

const eventKeys = {
  wellbeing: WellbeingEvents,
  alert: AlertEvents,
  medication: MedicationEvents,
  metabolism: MetabolismEvents,
};

export const generateError = (status: number, message: string) => ({
  status,
  message,
  success: false,
});

export const generateResponse = (status: number, data: any) => ({
  status,
  data,
  success: true,
});

export const checks = (req: Request, type: EventTypes) => {
  if (req.query.page && !Number(req.query.page)) {
    return generateError(400, 'Page must be a number');
  }

  if (!req.query.type && type !== 'alert') {
    return generateError(400, 'Event type is required');
  }

  if (
    !Object.values(eventKeys[type]).includes(req.query.type) &&
    type !== 'alert'
  ) {
    return generateError(400, `Event type does not match ${type} events`);
  }

  return null;
};
