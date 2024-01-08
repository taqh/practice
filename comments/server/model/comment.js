const fs = require('fs');
const path = require('path');

const filePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'comments.json'
);

exports.addComment = (payload) => {
  console.log(payload);
  let comments;

  // Read the existing JSON file.
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }
    comments = JSON.parse(fileContent);
    comments.push({
      id: `${payload.id}`,
      content: `${payload.text}`,
      createdAt: 'server',
      score: 0,
      user: {
        avatar: `./assets/avatars/image-${payload.username}.png`,
        username: payload.username,
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

    const updatedComments = comments.some((comment) => comment.id === id)
      ? comments.filter((comment) => comment.id !== id)
      : comments.map((comment) => {
          return {
            ...comment,
            replies: comment.replies?.filter((reply) => reply.id !== id),
          };
        });

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

exports.update = (payload) => {
  const id = payload.id;
  const text = payload.text;
  let comments;

  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }

    comments = JSON.parse(fileContent);

    const updatedComments = comments.some((comment) => comment.id === id)
      ? comments.map((comment) => {
          if (comment.id === id) {
            return { ...comment, content: text };
          } else {
            return comment;
          }
        })
      : comments.map((comment) => {
          const updatedReplies = comment.replies?.map((reply) => {
            if (reply.id === id) {
              return { ...reply, content: text };
            } else {
              return reply;
            }
          });
          return { ...comment, replies: updatedReplies };
        });

    comments = JSON.stringify(updatedComments);

    fs.writeFile(filePath, comments, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('comment/reply updated successfully');
    });
  });
};

exports.addReply = (payload) => {
  console.log(payload);
  let comments;

  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      console.log(err);
      return;
    }

    comments = JSON.parse(fileContent);

    const isReplyingToComment = comments.some(
      (comment) => comment.id === payload.id
    );

    const newReply = {
      id: Math.floor(Math.random(20) * 10000),
      replyingTo: payload.replyingTo,
      content: payload.text,
      createdAt: 'server',
      score: 0,
      user: {
        avatar: `./assets/avatars/image-${payload.username}.png`,
        username: payload.username,
      },
    };

    if (isReplyingToComment) {
      const commentToReply = comments.findIndex(
        (comment) => comment.id === payload.id
      );
      const updatedComment = comments.map((comment, index) => {
        if (index === commentToReply) {
          return {
            ...comment,
            replies: [...comment.replies, newReply],
          };
        } else {
          return comment;
        }
      });

      comments = JSON.stringify(updatedComment);
    } else {
      const commentIndex = comments.findIndex((comment) =>
        comment.replies.some((reply) => reply.id === payload.id)
      );

      if (commentIndex !== -1) {
        const updatedComments = comments.map((comment, index) => {
          if (index === commentIndex) {
            // Update only the target comment that contains the specific reply
            return {
              ...comment,
              replies: [...comment.replies, newReply],
            };
          }
          return comment; // Keep other comments unchanged
        });

        comments = JSON.stringify(updatedComments);
      }
    }

    // console.log(updatedComment);
    fs.writeFile(filePath, comments, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log('reply added successfully');
    });
  });
};
