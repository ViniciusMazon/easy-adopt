const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Tutors', () => {
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
    it('Should register a new tutor', async () => {
      const response = await request(app).post('/tutors').send({
        gender: 'Feminino',
        name: 'Fabíola de Camargo Correia',
        birth_date: '1993/10/29',
        cpf: '890.491.240-70',
        email: 'fabiola@gmail.com',
        password: 'abc123',
        phone: '(11)8888-8888',
        address_id: 'j3k45jh',
      });
      expect(response.statusCode).toEqual(201);
    });
  });

  describe('PUT', () => {
    it('Should update a tutor', async () => {
      const response = await request(app).put('/tutors/hrg123').send({
        gender: 'Feminino',
        name: 'Fabíola de Camargo Correia',
        birth_date: '1993/10/29',
        cpf: '890.491.240-70',
        email: 'fabiola@gmail.com',
        phone: '(11)8888-8888',
      });
      expect(response.statusCode).toEqual(200);
    });
  });

  describe('SHOW', () => {
    it('Should search for a tutor by email', async () => {
      const response = await request(app).get('/tutors/fabiola@gmail.com');
      expect(response.status).toEqual(200);
      expect(response.body.id).toEqual('hrg123');
    });
  });
});
