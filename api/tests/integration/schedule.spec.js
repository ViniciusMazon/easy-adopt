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
        time: '14:00',
        tutor_id: 'hrg123',
        animal_id: '1bc2',
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
