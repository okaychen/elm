const fs = require('fs');

const fromJSONFile = (filename) => {
  return (req, res) => {
    let data = fs.readFileSync(`./data/${filename}.json`).toString();
    console.log(data + '1')
    let json = JSON.parse(data);
    return res.json(json);
  }
}

const proxy = {
  'GET api/seller': fromJSONFile('seller'),
}

module.exports = proxy;
