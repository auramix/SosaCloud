const request = require('supertest');
const app = require('./index.js');
import expect from 'expect';


describe("GET /api/track/:id ", () => {
  it("It should respond with an array track objects", async () => {
    const response = await request(app).get('/api/track/' + '5');
    expect(response.body).toHaveLength(3);
    expect(response.statusCode).toBe(200);
  });
});

// Get three related tracks, then take the userName from one and test the return of user data