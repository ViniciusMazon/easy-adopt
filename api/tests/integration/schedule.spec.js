const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Schedule', () => {
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
    it('Should create a new schedule', async () => {
      const response = await request(app).post('/schedule').send({
        date: '2020-11-20',
        period: '08:00 às 12:00',
        adoption_request_id: 'fdas878',
      });

      expect(response.statusCode).toEqual(201);
    });
  });

  describe('INDEX', () => {
    it('Should schedule appointments for the next 7 days', async () => {
      const response = await request(app).get('/schedule');
      expect(response.statusCode).toEqual(200);
    });
  });
});
