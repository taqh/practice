const fs = require('fs');
const path = require('path');

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'comments.json'
);

exports.addComment = (params) => {
  console.log(params);
  let comments;

  // Read the existing JSON file.
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }
    comments = JSON.parse(fileContent);
    comments.push({
      id: `${params.id}`,
      content: `${params.text}`,
      createdAt: 'server',
      score: 0,
      user: {
        image: {
          png: './assets/avatars/image-juliusomo.png',
          webp: './assets/avatars/image-juliusomo.webp',
        },
        username: 'juliusomo',
      },
      replies: [],
    });

    const updatedComments = JSON.stringify(comments);

    fs.writeFile(filePath, updatedComments, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Comment added successfully');
    });
  });
};

exports.deleteComment = (id) => {
  console.log(id);
  let comments;

  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }
    comments = JSON.parse(fileContent);

    const updatedComments = comments.filter((comment) => comment.id !== id);

    comments = JSON.stringify(updatedComments);

    fs.writeFile(filePath, comments, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('comment deleted successfully');
    });
  });
};
