const request = require('supertest');
const app = require('../app'); // chemin vers ton app.js

describe('API DevOps Ninja', () => {
  test('GET /api/status doit retourner {status: "ok"}', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.objectContaining({ status: 'ok' }));
  });
});