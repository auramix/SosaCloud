const request = require('supertest');
const app = require('./index.js');
const db = require('../db/index.js');
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
    response = await request(app).get(`/api/user/${username}`);
    expect(response.body).toHaveLength(1);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).hasOwnProperty('userName');
  })
})

// Playlists api tests

describe('Call api and test structure of returned objects', () => {
  it('Should return a user object', async () => {
    let response = await request(app).get('/api/playlists/7');
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).not.toHaveLength(0);
    expect(response.body[0]).hasOwnProperty('playlistName');
    expect(response.statusCode).toBe(200);

    db.connection.end((err) => {
      if (err) console.log('Ending connection failed: ', err)
    })
  })
})