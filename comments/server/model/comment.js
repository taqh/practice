const fs = require('fs');
const path = require('path');
const { mainModule } = require('process');

const filePath = path.dirname(__dirname, 'data', 'comments.json');

exports.addComment = (text) => {
  console.log(text);
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      return;
    }
    console.log(fileContent)
  });
};
