const express = require('express');

const router = express.Router();

const commentController = require('../controllers/comment');

// GET /comments
router.get('/comments', commentController.getComments);

// POST /comments
router.post('/comments', commentController.createComment);

// PATCH /comments/:id
router.patch('/comments/:id', commentController.updateComment);

// PUT /comments/:id
router.put('/comments/:id', commentController.createReply);

// DELETE /comments/:id
router.delete('/comments/:id', commentController.deleteComment);

module.exports = router;
