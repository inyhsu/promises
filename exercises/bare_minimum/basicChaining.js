/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var readUserName = require('./promiseConstructor.js');
var sendRequest = require('./promisification.js')
Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function (readFilePath, writeFilePath) {
  return readUserName.pluckFirstLineFromFileAsync(readFilePath)
    .then((username) => {
      return username
    })
    .then((username) => {
      return sendRequest.getGitHubProfileAsync(username);
    })
    .then((body) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(body))
      console.log(body);
    })

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
