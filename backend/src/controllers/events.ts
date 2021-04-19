import * as express from 'express';
import db from '../database';
import { checks, generateResponse, generateError } from '../helper/events';
import { alertCount, eventCount, paginatedEvents } from '../queries';
import { AlertEvents } from '../types';

export const eventsController = express.Router();

const PER_PAGE = 10;

eventsController.get('/api/events/:recipient/wellbeing', async (req, res) => {
  const error = checks(req, 'wellbeing');
  if (error) return res.status(error.status).json(error);

  const { recipient } = req.params;
  let { type, page = 1 } = req.query;

  if (Number(page) < 1) page = 1;
  const offset = (Number(page) - 1) * PER_PAGE;

  try {
    const [[result], events] = await Promise.all([
      eventCount({ care_recipient_id: recipient, event_type: type }),
      paginatedEvents(
        { care_recipient_id: recipient, event_type: type },
        PER_PAGE,
        offset
      ),
    ]);

    return res.status(200).json(
      generateResponse(200, {
        events,
        total: result.total,
        current_page: Number(page),
        last_page: Math.ceil(result.total / PER_PAGE),
      })
    );
  } catch (e) {
    return res.status(500).json(generateError(500, 'Something Went Wrong'));
  }
});

eventsController.get('/api/events/:recipient/metabolism', async (req, res) => {
  const error = checks(req, 'metabolism');
  if (error) return res.status(error.status).json(error);

  const { recipient } = req.params;
  let { type, page = 1 } = req.query;

  if (Number(page) < 1) page = 1;
  const offset = (Number(page) - 1) * PER_PAGE;

  try {
    const [[result], events] = await Promise.all([
      eventCount({ care_recipient_id: recipient, event_type: type }),
      paginatedEvents(
        { care_recipient_id: recipient, event_type: type },
        PER_PAGE,
        offset
      ),
    ]);

    return res.status(200).json(
      generateResponse(200, {
        events,
        total: result.total,
        current_page: Number(page),
        last_page: Math.ceil(result.total / PER_PAGE),
      })
    );
  } catch (e) {
    return res.status(500).json(generateError(500, 'Something Went Wrong'));
  }
});

eventsController.get('/api/events/:recipient/medication', async (req, res) => {
  const error = checks(req, 'medication');

  if (error) return res.status(error.status).json(error);

  const { recipient } = req.params;

  try {
    const events = await db('events')
      .select('payload_as_text')
      .where({ care_recipient_id: recipient })
      .limit(10);

    return res.status(200).json({
      events,
    });
  } catch (e) {
    return res.status(500).json(generateError(500, 'Something Went Wrong'));
  }
});

eventsController.get('/api/events/:recipient/alert', async (req, res) => {
  const error = checks(req, 'alert');
  if (error) return res.status(error.status).json(error);

  const { recipient } = req.params;
  let { page = 1 } = req.query;

  if (Number(page) < 1) page = 1;
  const offset = (Number(page) - 1) * PER_PAGE;

  try {
    const [[raised], [qualified], alert_qualified] = await Promise.all([
      alertCount(
        { care_recipient_id: recipient, event_type: AlertEvents.alert_raised },
        AlertEvents.alert_raised
      ),
      alertCount(
        {
          care_recipient_id: recipient,
          event_type: AlertEvents.alert_qualified,
        },
        AlertEvents.alert_qualified
      ),
      paginatedEvents(
        {
          care_recipient_id: recipient,
          event_type: AlertEvents.alert_qualified,
        },
        PER_PAGE,
        offset
      ),
    ]);

    return res.status(200).json(
      generateResponse(200, {
        total_alert_raised: raised.alert_raised,
        total_alert_qualified: qualified.alert_qualified,
        alert_qualified: {
          results: alert_qualified,
          current_page: Number(page),
          last_page: Math.ceil(qualified.alert_qualified / PER_PAGE),
        },
      })
    );
  } catch (e) {
    return res.status(500).json(generateError(500, 'Something Went Wrong'));
  }
});

eventsController.get('/api/events/error', async (_, res) => {
  try {
    throw new Error('Internal server error');
  } catch (e) {
    return res.status(500).json(generateError(500, 'Something Went Wrong'));
  }
});
