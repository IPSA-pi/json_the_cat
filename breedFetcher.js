const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  const searchURL =  `https://api.thecatapi.com/v1/breeds/search`;
  const url = searchURL + `?q=${breedName}`;

  
  request(url, (error, response, body) => {
    if (error) { 
      callback (error, null);
    } else {
      // store parsed query in a variable
      const data = JSON.parse(body);
      const description = data[0].description;
      callback (null, description);
    }
  });
}

module.exports = { fetchBreedDescription };
