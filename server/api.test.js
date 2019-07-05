const request = require('supertest');
const app = require('./index.js');
import expect from 'expect';


describe('GET /api/track/:id', () => {
  it("It should respond with an array track objects", async () => {
    const response = await request(app).get('/api/track/' + '5');
    expect(response.body).toHaveLength(3);
    expect(response.statusCode).toBe(200);
  });
});

// Get three related tracks, then take the userName from one and test the return of user data

describe('GET 3 related tracks, then take the userName and test return of user data', () => {
  it('Should return a user object', async () => {
    let response = await request(app).get('/api/track/' + '5');
    expect(response.body).toHaveLength(3);
    let username = response.body[0].artistName.trim();
    console.log('USERNAME', username);
    response = await request(app).get(`/api/user/${username}`);
    expect(response.body).toHaveLength(1);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).hasOwnProperty('userName');
  })
})