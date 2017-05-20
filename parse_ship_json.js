var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var path = require('path');

// need .catch(error)
function readFiles(dirname, onFileContent, onError) {
  fs.readdirAsync(dirname).then(function (filenames) {
    filenames.forEach(function (filename) {
      fs.readFileAsync(path.resolve(dirname, filename), 'utf-8').then(function (content) {
        onFileContent(filename, content);
      });
    });
  });

}

var data = {};

readFiles(path.resolve(__dirname, 'raw_ship_data/'), function (filename, content) {
  data[filename] = content;
}, function (error) {
  throw err;
});

// I am trying to readFiles().then(create new obj based on the nodes I need from data).then(write new json file with the new obj)
// readFiles works but is not a promise.

