const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Animals', () => {
  beforeEach(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
  });

  afterEach(async () => {
    await db.destroy();
  });

  it('POST / Should register a new animal', async () => {
    const response = await request(app)
      .post('/animals')
      .field('name', 'Mikka')
      .field('specie', 'Cachorro')
      .field('gender', 'Fêmea')
      .field('size', 'Pequeno')
      .field('age', 'Filhote')
      .field('status', 'disponível')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg');

    expect(response.body.name).toEqual('Mikka');
  });

  it('PUT / Should update a animal', async () => {
    const response = await request(app)
      .put('/animals/1bc2')
      .field('name', 'Mikka')
      .field('gender', 'Fêmea')
      .field('specie', 'Cachorro')
      .field('size', 'Pequeno')
      .field('age', 'Filhote')
      .field('status', 'indisponível')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg')
      .attach('images', 'tests/fixtures/a.jpg');

    expect(response.statusCode).toEqual(200);
  });

  it('DELETE / Should delete a animal', async () => {
    const response = await request(app).delete('/animals/1bc2');

    expect(response.statusCode).toEqual(200);
  });

  it('INDEX / Should list all registered animals', async () => {
    const response = await request(app).get('/animals');

    expect(response.statusCode).toEqual(200);
  });

  it('SHOW / Should list a registered animal', async () => {
    const response = await request(app).get('/animals/1bc2');

    expect(response.statusCode).toEqual(200);
  });
});
