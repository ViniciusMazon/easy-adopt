const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Collaborators', () => {
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
    it('Should create a donation campaign', async () => {
      const response = await request(app).post('/donation-campaigns').send({
        title: 'Compra de Ração',
        description:
          'Precisamos arrecadar dinheiro destinado a compra de ração',
        goal: 1000.0,
        collaborator_id: 'abc123',
      });
      expect(response.status).toEqual(201);
    });
  });

  describe('INDEX', () => {
    it('Should display all registered campaigns', async () => {
      const response = await request(app).get('/donation-campaigns');
      expect(response.status).toEqual(200);
      expect(response.body.length).toBe(1);
    });
  });

  describe('INDEX', () => {
    it('Should end a campaign', async () => {
      const response = await request(app).delete(
        '/donation-campaigns/ajfh32en123'
      );
      expect(response.status).toEqual(200);
    });
  });
});
