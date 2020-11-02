const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Procedures', () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.destroy();
  });

  it('POST / Should register a new procedure', async () => {
    const response = await request(app).post('/procedures').send({
      name: 'Vacina',
      comments: 'Peso do animal 8kg',
      animal_id: '1bc2',
      collaborator_id: 'abc123',
    });

    expect(response.statusCode).toEqual(201);
  });
});
