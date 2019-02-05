const fs = require('fs');
const path = require('path');

const writeToFile = ({ isDev, filePath }) => {
  if (!isDev) {
    const writeStream = fs.createWriteStream(path.normalize(filePath), {
      encoding: 'utf8',
      flags: 'w'
    });

    process.stdout = require('stream').Writable();
    process.stdout._write = function(chunk, encoding, callback) {
      writeStream.write(chunk, encoding, callback);
    };
  }
};

exports = module.exports = {
  writeToFile
};
