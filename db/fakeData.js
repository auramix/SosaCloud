let faker = require('faker');
let fs = require('fs');

let createTracksData = function (qty) {
  let data = '';
  for (var i = 0; i < qty; i++) {
    data += `${faker.random.words()}, ${faker.internet.userName()}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${faker.image.imageUrl()}, ${Math.floor(Math.random() * 100)}\n`
  }
  return data.slice(0, -1);
}

let tracksData = createTracksData(100);
let createData = function () {
  fs.writeFileSync(__dirname + '/testData.txt', tracksData)
};

exports.createData = createData;