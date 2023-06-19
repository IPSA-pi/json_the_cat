const request = require('request');
const { argv } = require('process');

let usrInput = argv[2];
const url =  `https://api.thdecatapi.com/v1/breeds/search?q=${usrInput}`;


const queryBreeds = function (url) {
  
  request(url, (error, response, body) => {
    if (error) {
      // console.error("error:", error);
      console.log('Page not found, check url');
      return;
    }
    // if the input doesn't match any breed on the database the API returns an empty array represented as a string, an empty JSON object has a length of two :O 
    if (body.length <= 2) {
      console.log('No such breed in the database');
      return;
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    // return body;
  })
}
queryBreeds(url);
