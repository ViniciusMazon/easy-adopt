const request = require('supertest');
const db = require('../../src/database/connection');
const app = require('../../src/app');

describe('Help', () => {
  describe('INDEX', () => {
    it('Should receive the manual download link', async () => {
      const response = await request(app).get('/help');
      expect(response.status).toEqual(200);
    });
  });
});
