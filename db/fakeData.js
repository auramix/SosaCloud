let faker = require('faker');
let fs = require('fs');

const users = [];
const getRandomUser = function () {
  let randomIdx = Math.floor(Math.random() * 100);
  return users[randomIdx];
}
for (let i = 0; i < 100; i++) {
  users.push(faker.internet.userName());
}


let rnd = (max, min = 0) => Math.floor(Math.random() * (max - min) + min);
let imageUrl = () => {
  return 'https://pics01212001.s3-us-west-1.amazonaws.com/' + rnd(34, 1);
}

/*    functions for creating fake data for each table */
//++++++++++++++++++++++TABLES+++++++++++++++++++++++++++//
let createTracksData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.random.words()}, ${getRandomUser()}, ${rnd(100)}, ${rnd(100)}, ${imageUrl()}, ${rnd(100)}\n`
  }
  return data.slice(0, -1);
}

let createUsersData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${users[i]},, ${faker.address.city() + ', ' + faker.address.country()},, ${imageUrl()},, ${rnd(1000000)}\n`
  }
  return data.slice(0, -1);
}

let createPlaylistsData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.company.catchPhrase()}, ${imageUrl()}, ${getRandomUser()}, ${rnd(100)} \n`
  }
  return data.slice(0, -1);
}

let createJuncData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${rnd(100)}, ${rnd(100)} \n`
  }
  return data.slice(0, -1);
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


/*    Generate the fake data    */
let tracksData = createTracksData(100);
let usersData = createUsersData(100);
let playlistsData = createPlaylistsData(1000);
let likesTracksData = createJuncData(1000);
let playlistsTracksData = createJuncData(100);
let repostsData = createJuncData(100);

fs.writeFileSync(__dirname + '/fake_data/tracksData.txt', tracksData);
fs.writeFileSync(__dirname + '/fake_data/usersData.txt', usersData);
fs.writeFileSync(__dirname + '/fake_data/playlistsData.txt', playlistsData);

fs.writeFileSync(__dirname + '/fake_data/likesTracksData.txt', likesTracksData);
fs.writeFileSync(__dirname + '/fake_data/playlistsTracksData.txt', playlistsTracksData);
fs.writeFileSync(__dirname + '/fake_data/repostsData.txt', repostsData);