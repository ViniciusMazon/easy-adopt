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
    it('Should register a new collaborator', async () => {
      const response = await request(app).post('/collaborators').send({
        name: 'Samanta de Souza',
        birth_date: '1986-10-23',
        cpf: '815.594.760-28',
        email: 'samanta@easyAdopt.com',
        password: '1234',
        phone: '(11)9999-9999',
        access_code: '5D44900A435D35D9A',
        address_id: '1hg3gge',
      });
      expect(response.statusCode).toEqual(201);
    });
    it('Should refuse to register a new collaborator with an invalid access code', async () => {
      const response = await request(app).post('/collaborators').send({
        name: 'Samanta de Souza',
        birth_date: '1986-10-23',
        cpf: '815.594.760-28',
        email: 'samanta@easyAdopt.com',
        password: '1234',
        phone: '(11)9999-9999',
        access_code: 'fds5gf43',
        address_id: '1hg3gge',
      });
      expect(response.statusCode).toEqual(200);
      expect(response.body.message).toEqual('Código de acesso inválido');
    });
  });

  describe('PUT', () => {
    it('Should edit an existing collaborator', async () => {
      const response = await request(app).put('/collaborators/abc123').send({
        name: 'Catarina de Carvalho',
        birth_date: '10/10/1993',
        cpf: '815.594.760-28',
        email: 'catarina@easyAdopt.com',
        phone: '(11)9999-9999',
      });
      expect(response.statusCode).toEqual(200);
    });
    it('Should refuse to edit a collaborator that does not exist', async () => {
      const response = await request(app).put('/collaborators/fake123').send({
        name: 'Catarina de Carvalho',
        birth_date: '10/10/1993',
        cpf: '815.594.760-28',
        email: 'catarina@easyAdopt.com',
        phone: '(11)9999-9999',
      });
      expect(response.statusCode).toEqual(400);
      expect(response.body.message).toEqual(
        'Não foi possível encontrar um colaborador com o id informado'
      );
    });
  });

  describe('SHOW', () => {
    it('Should search for a collaborator by id', async () => {
      const response = await request(app).get('/collaborators/abc123');
      expect(response.status).toEqual(200);
      expect(response.body.id).toEqual('abc123');
    });
  });
});
