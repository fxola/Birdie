import app from '../src/application';
import * as request from 'supertest';

describe('Tests for Wellbeing Events', () => {
  it('should fetch general observation events', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/wellbeing?type=general_observation'
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

  it('should fetch physical health observation events', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/wellbeing?type=physical_health_observation'
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
  it('should return an error when a user wants to fetch events that are not grouped under wellbeing ', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/wellbeing?type=regular_medication_taken'
      )
      .expect(400)
      .expect(function(res) {
        expect(res.body.status).toBe(400);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe(
          'Event type does not match wellbeing events'
        );
        expect(res.body.success).toBeFalsy();
      });
  });
  it('should return an error when a user wants to fetch event grouped under wellbeing without providing a type', async () => {
    await request(app)
      .get('/api/events/e3e2bff8-d318-4760-beea-841a75f00227/wellbeing')
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
  it('should return an error when a user wants to fetch paginated events grouped under wellbeing providing a page value that is not a number', async () => {
    await request(app)
      .get(
        '/api/events/e3e2bff8-d318-4760-beea-841a75f00227/wellbeing?type=physical_health_observation&page=NO'
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
