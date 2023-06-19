const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];
const url =  `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

fetchBreedDescription(url);