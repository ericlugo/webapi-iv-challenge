const express = require('express');
const { getPosts, getPost, deletePost, updatePost } = require('../controllers/postControllers');
const { validatePostId } = require(`../middleware/validation.js`);

const router = express.Router();

router.get('/', getPosts);

router.get('/:id', validatePostId, getPost);

router.delete('/:id', validatePostId, deletePost);

router.put('/:id', validatePostId, updatePost);

module.exports = router;
