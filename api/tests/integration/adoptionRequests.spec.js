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
    it('Should create a new adoption request', async () => {
      const response = await request(app).post('/adoption-request').send({
        residence_type: 'Casa',
        adults_home: '2',
        children_home: '1',
        smokers_home: 'Não',
        adopted_before: 'Não',
        other_animals: 'Não',
        sick_animals: 'Não',
        aware_cost: 'Sim',
        why_want_adopt: 'Quero ajudar a melhorar a vida dos animais',
        animal_id: '1bc2',
        tutor_id: 'hrg123',
      });

      expect(response.statusCode).toEqual(201);
    });
  });

  describe('INDEX', () => {
    it('Should list all adoption requests', async () => {
      const response = await request(app).get('/adoption-request');

      expect(response.statusCode).toEqual(200);
    });
  });

  describe('SHOW', () => {
    it('Should list an adoption request', async () => {
      const response = await request(app).get('/adoption-request/fdas878');

      expect(response.statusCode).toEqual(200);
    });
  });
});