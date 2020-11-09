const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('AccessCode', () => {
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
    it('Should generate an access code', async () => {
      const response = await request(app).post('/access-code').send({
        collaborator_id: 'abc123',
      });
      expect(response.statusCode).toEqual(201);
    });
    it('Should refuse to generate an access code for an collaborator who does not exist', async () => {
      const response = await request(app).post('/access-code').send({
        collaborator_id: 'fake123',
      });
      expect(response.statusCode).toEqual(401);
      expect(response.body.message).toEqual(
        'Desculpe, o colaborador informado não é válido'
      );
    });
  });

  describe('INDEX', () => {
    it('Should authorize a valid access code', async () => {
      const response = await request(app).get('/access-code/5D44900A435D35D9A');
      expect(response.statusCode).toEqual(200);
      expect(response.body.isValid).toBe(true);
    });
    it('Should refuse an invalid access code', async () => {
      const response = await request(app).get('/access-code/fds5gf43');
      expect(response.statusCode).toEqual(200);
      expect(response.body.isValid).toBe(false);
    });
  });
});
