import app from '../src/application';
import * as request from 'supertest';

describe('Tests for Alert Events', () => {
  it('should fetch Alert events details', async () => {
    await request(app)
      .get('/api/events/e3e2bff8-d318-4760-beea-841a75f00227/alert')
      .expect(200)
      .expect(function(res) {
        expect(res.body.status).toBe(200);
        expect(res.body).toHaveProperty('status');
        expect(res.body).toHaveProperty('data');
        expect(res.body).toHaveProperty('success');
        expect(res.body.success).toBeTruthy();
        expect(res.body.data).toHaveProperty('total_alert_raised');
        expect(res.body.data).toHaveProperty('total_alert_qualified');
        expect(res.body.data).toHaveProperty('alert_qualified');
        expect(res.body.data.alert_qualified).toHaveProperty('last_page');
        expect(res.body.data.alert_qualified).toHaveProperty('current_page');
        expect(res.body.data.alert_qualified).toHaveProperty('results');
        expect(
          res.body.data.alert_qualified.results.length
        ).toBeLessThanOrEqual(10);
      });
  });
});
