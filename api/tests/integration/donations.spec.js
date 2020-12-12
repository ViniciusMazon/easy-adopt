const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Donations', () => {
  beforeEach(async () => {
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.migrate.rollback();
  });

  afterAll(async () => {
    await db.destroy();
  });

  describe('POST', () => {
    it('Should create a new donation', async () => {
      const response = await request(app).post('/donation').send({
        amount: 100.0,
        tutor_id: 'hrg123',
        email: 'fabiola@gmail.com',
        donation_campaign_id: 'ajfh32en123',
      });
      expect(response.status).toEqual(200);
    });
  });

  describe('PUT', () => {
    it('Should, after payment, change the status of the donation', async () => {
      const response = await request(app).put('/donation/43tdfasd');
      expect(response.status).toEqual(200);
    });
  });
});
