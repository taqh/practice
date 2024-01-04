const fs = require('fs');
const path = require('path');

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'comments.json'
);

exports.addComment = (text) => {
  console.log(text);
  fs.readFile(filePath, (err, fileContent) => {
    let comments = [];
    if (err) {
      console.log(err);
      return;
    }
    comments.push(JSON.parse(fileContent))
    console.log(comments);
  });
};
