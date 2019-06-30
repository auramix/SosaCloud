const api = require('../server/api.js');
const mysql = require('mysql');
const data = require('../__mock_data__/api_data.js');

jest.mock('mysql');
jest.mock('../db/index.js')
jest.mock('../server/api.js')

test('calls our api', () => {
  const id = 5;
  const res = data.tracks;

  db.connection.query.mockResolvedValue(res)

  return api.getRelatedTracks(id, () => {}).then(results => expect(results).toEqual(res));
})

// users.test.js
// import axios from 'axios';
// import Users from './users';

// jest.mock('axios');

// test('should fetch users', () => {
//   const users = [{name: 'Bob'}];
//   const resp = {data: users};
//   axios.get.mockResolvedValue(resp);

//   // or you could use the following depending on your use case:
//   // axios.get.mockImplementation(() => Promise.resolve(resp))

//   return Users.all().then(data => expect(data).toEqual(users));
// });