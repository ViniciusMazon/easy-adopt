const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Animals', () => {
  beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
  });

  afterAll(async () => {
    await db.destroy();
  });

  it('Should register a new animal', async () => {
    const response = await request(app)
      .post('/animals')
      .field('name', 'Mikka')
      .field('specie', 'Cachorro')
      .field('gender', 'Fêmea')
      .field('size', 'Pequeno')
      .field('age', 'Filhote')
      .field('status', 'Disponível')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg');

    expect(response.body.name).toEqual('Mikka');
  });
});
