const userDb = require(`../data/userDb.js`);
const postDb = require(`../data/postDb.js`);
const validation_exports = (module.exports = {});

validation_exports.validateUserId = async function(request, response, next) {
  try {
    const id = request.params.id;
    const user = await userDb.getById(id);

    user
      ? ((request.user = id), next())
      : response.status(400).json({
          success: false,
          message: `invalid user id`,
        });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `fatal error attempting to validate user id`,
    });
  }
};

validation_exports.validateUser = function(request, response, next) {
  try {
    const newUser = { ...request.body };

    newUser
      ? newUser.name
        ? next()
        : response.status(400).json({
            success: false,
            message: `missing required name field`,
          })
      : response.status(400).json({
          success: false,
          message: `missing user data`,
        });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `fatal error attempting to validate new user data`,
    });
  }
};

validation_exports.validatePost = function(request, response, next) {
  try {
    const newPost = { ...request.body };

    newPost
      ? newPost.text
        ? next()
        : response.status(400).json({
            success: false,
            message: `missing required text field`,
          })
      : response.status(400).json({
          success: false,
          message: `missing post data`,
        });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `fatal error attempting to validate new post data`,
    });
  }
};

validation_exports.validatePostId = async function(request, response, next) {
  try {
    const id = request.params.id;
    const post = await postDb.getById(id);

    post
      ? ((request.post = id), next())
      : response.status(400).json({
          success: false,
          message: `Invalid Post ID`,
        });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `Fatal Error. Unable to Validate PostID`,
    });
  }
};
