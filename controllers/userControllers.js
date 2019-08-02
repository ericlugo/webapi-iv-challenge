const userDb = require(`../data/userDb.js`);
const postDb = require(`../data/postDb.js`);
const userController_exports = (module.exports = {});

userController_exports.createUser = async function(request, response) {
  try {
    const newUser = await userDb.insert(request.body);
    newUser &&
      response.status(201).json({
        success: true,
        newUser,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to Create New User.`,
    });
  }
};

userController_exports.createUserPost = async function(request, response) {
  try {
    const newPost = { ...request.body, user_id: request.user };
    console.log(newPost);
    const posted = await postDb.insert(newPost);
    posted &&
      response.status(201).json({
        success: true,
        newPost,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: 'Fatal Error. Unable to Create New User Post.',
    });
  }
};

userController_exports.getUsers = async function(request, response) {
  try {
    const users = await userDb.get();
    users &&
      response.status(200).json({
        success: true,
        users,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to retrieve Users Information.`,
    });
  }
};

userController_exports.getUser = async function(request, response) {
  try {
    const user = await userDb.getById(request.user);
    user &&
      response.status(200).json({
        success: true,
        user,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to retrieve User Information`,
    });
  }
};

userController_exports.getUserPosts = async function(request, response) {
  try {
    const posts = await userDb.getUserPosts(request.user);
    posts &&
      response.status(200).json({
        success: true,
        posts,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to retrieve User Posts.`,
    });
  }
};

userController_exports.deleteUser = async function(request, response) {
  try {
    const deletedUser = await userDb.getById(request.user);
    const deleted = await userDb.remove(request.user);
    deleted &&
      response.status(200).json({
        success: true,
        deletedUser,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to Delete User.`,
    });
  }
};

userController_exports.updateUser = async function(request, response) {
  try {
    const updated = await userDb.update(request.user, { ...request.body });
    const updatedUser = await userDb.getById(request.user);
    updated &&
      response.status(200).json({
        success: true,
        updatedUser,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to Update User.`,
    });
  }
};
