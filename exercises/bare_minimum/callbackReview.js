/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // readFile to first line
  // callback(err, readFileFirstLine)

  fs.readFile(filePath, (err, content) => {
    if(err) {
      callback(err)
    } else {
      callback(null, content.toString().split('\n')[0])
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function (err, res) {
    if(err){
      callback(err)
    } else {
      callback(null, res.statusCode)
    }

});

};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
