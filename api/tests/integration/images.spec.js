const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Images', () => {
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
    it('Should add a new image', async () => {
      const response = await request(app)
        .post('/images')
        .attach('image', 'tests/fixtures/a.jpg');

      expect(response.statusCode).toEqual(201);
    });
  });

  describe('PUT', () => {
    it('Should edit an image', async () => {
      const response = await request(app)
        .put('/images/img1')
        .attach('image', 'tests/fixtures/a.jpg');

      expect(response.statusCode).toEqual(200);
    });
  });
});
