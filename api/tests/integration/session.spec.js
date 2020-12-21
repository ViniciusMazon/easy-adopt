const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Session', () => {
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
    it('Should generate a token', async () => {
      const response = await request(app).post('/sing-in').send({
        email: 'catarina@easyAdopt.com',
        password: '123456789',
      });
      expect(response.statusCode).toEqual(200);
    });
  });
});
