import db from '../database';
import { AlertEvents } from '../types';

export const eventCount = (filters: object) => {
  return db('events')
    .count('payload_as_text', { as: 'total' })
    .where(filters);
};

export const paginatedEvents = (
  filters: object,
  limit: number,
  offset: number
) => {
  return db('events')
    .pluck('payload_as_text')
    .where(filters)
    .orderBy('timestamp', 'desc')
    .limit(limit)
    .offset(offset);
};

export const alertCount = (filter: object, type: AlertEvents) => {
  return db('events')
    .count('alert_id', { as: type })
    .where(filter);
};
