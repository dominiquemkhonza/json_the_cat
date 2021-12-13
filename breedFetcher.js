
const request = require('request');


const fetchBreedDescription = function(breedName, cb) {
let breedSearch = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(breedSearch, (error, res, body) => {
    if (error) {
      cb(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length !== 0) {
        cb(null, data[0]['description']);

      } else {
        cb("Sorry! Breed was not found", null);
      }
    }
  });
};


module.exports = { fetchBreedDescription }; 