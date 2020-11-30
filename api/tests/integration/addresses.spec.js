const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Animals', () => {
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
    it('Should add a new address', async () => {
      const response = await request(app).post('/address').send({
        street: 'Rua ABC',
        number: '123',
        neighborhood: 'ABC',
        city: 'CD',
        state: 'AZ',
        cep: '11111-111',
      });
      expect(response.status).toEqual(201);
    });
  });

  describe('PUT', () => {
    it('Should update a address', async () => {
      const response = await request(app).put('/address/1hg3gge').send({
        street: 'Rua ABC',
        number: '123',
        neighborhood: 'ABC',
        city: 'Alfabeto',
        state: 'AZ',
        cep: '21111-111',
      });
      expect(response.status).toEqual(200);
    });
  });
});
