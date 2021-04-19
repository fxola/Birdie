import app from '../src/application';
import * as request from 'supertest';

describe('Tests for Metabolism Events', () => {
  it('should fetch food intake observation  events', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/metabolism?type=food_intake_observation'
      )
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toBe(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('success');
        expect(res.body.data).toHaveProperty('events');
        expect(res.body.data).toHaveProperty('total');
        expect(res.body.data).toHaveProperty('current_page');
        expect(res.body.data).toHaveProperty('last_page');
        expect(res.body.data.events.length).toBeLessThanOrEqual(10);
      });
  });

  it('should fetch food intake observation events', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/metabolism?type=food_intake_observation'
      )
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toBe(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('success');
        expect(res.body.data).toHaveProperty('events');
        expect(res.body.data).toHaveProperty('total');
        expect(res.body.data).toHaveProperty('current_page');
        expect(res.body.data).toHaveProperty('last_page');
        expect(res.body.data.events.length).toBeLessThanOrEqual(10);
      });
  });
  it('should return an error when a user wants to fetch events that are not grouped under metabolism ', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/metabolism?type=regular_medication_taken'
      )
      .expect(400)
      .expect(function(res) {
        expect(res.body.status).toBe(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe(
          'Event type does not match metabolism events'
        );
        expect(res.body.success).toBeFalsy();
      });
  });
  it('should return an error when a user wants to fetch event grouped under metabolism without providing a type', async () => {
    await request(app)
      .get('/api/events/e3e2bff8-d318-4760-beea-841a75f00227/metabolism')
      .expect(400)
      .expect(function(res) {
        expect(res.body.status).toBe(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe('Event type is required');
        expect(res.body.success).toBeFalsy();
      });
  });
  it('should return an error when a user wants to fetch paginated events grouped under metabolism providing a page value that is not a number', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/metabolism?type=regular_medication_taken&page=yes'
      )
      .expect(400)
      .expect(function(res) {
        expect(res.body.status).toBe(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe('Page must be a number');
        expect(res.body.success).toBeFalsy();
      });
  });
});
