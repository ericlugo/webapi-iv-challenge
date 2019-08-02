const express = require('express');
const {
  createUser,
  createUserPost,
  getUsers,
  getUser,
  getUserPosts,
  deleteUser,
  updateUser,
} = require('../controllers/userControllers.js');
const { validateUserId, validateUser, validatePost } = require(`../middleware/validation.js`);

const router = express.Router();

router.post('/', validateUser, createUser);
router.post('/:id/posts', validatePost, validateUserId, createUserPost);
router.get('/', getUsers);
router.get('/:id', validateUserId, getUser);
router.get('/:id/posts', validateUserId, getUserPosts);
router.delete('/:id', validateUserId, deleteUser);
router.put('/:id', validateUser, validateUserId, updateUser);

module.exports = router;
