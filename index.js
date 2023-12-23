const fs = require('fs');
const http = require('http');
const file = fs.createWriteStream('large-file.txt');
const request = http.get('http://example.com/large-file.txt', (response) => {
  response.pipe(file);
});
request.on('error', (err) => {
  console.error(err);
});
file.on('finish', () => {
  console.log('File downloaded successfully.');
});