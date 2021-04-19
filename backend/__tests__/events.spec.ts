import app from '../src/application';
import * as request from 'supertest';

describe('Tests for General API', () => {
  it('should return an error when a user tries to visit a non-existent route', async () => {
    await request(app)
      .get('/api/events/thatdoesnotexist')
      .expect(404)
      .expect(function(res) {
        expect(res.body.status).toBe(404);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe('Route does not exist');
        expect(res.body.success).toBeFalsy();
      });
  });
  it('should return an error when something goes wrong on the server', async () => {
    await request(app)
      .get('/api/events/error')
      .expect(500)
      .expect(function(res) {
        expect(res.body.status).toBe(500);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('message');
        expect(res.body).toHaveProperty('success');
        expect(res.body.message).toBe('Something Went Wrong');
        expect(res.body.success).toBeFalsy();
      });
  });
});
