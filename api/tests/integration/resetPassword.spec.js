const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Procedures', () => {
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

  describe('SHOW', () => {
    it('Should generate a token to reset the password', async () => {
      const response = await request(app).get(
        '/password-reset/collaborator/catarina@easyAdopt.com'
      );

      expect(response.statusCode).toEqual(200);
    });
  });
});
