const postDb = require(`../data/postDb.js`);
const postController_exports = (module.exports = {});

postController_exports.getPosts = async function(request, response) {
  try {
    const posts = await postDb.get();
    posts &&
      response.status(200).json({
        success: true,
        posts,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: 'Fatal Error. Unable to Retrieve Posts.',
    });
  }
};

postController_exports.getPost = async function(request, response) {
  try {
    const post = await postDb.getById(request.post);
    post &&
      response.status(200).json({
        success: true,
        post,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: 'Fatal Error. Unable to Retrieve Post.',
    });
  }
};

postController_exports.deletePost = async function(request, response) {
  try {
    const deletedPost = await postDb.getById(request.post);
    const deleted = await postDb.remove(request.post);
    deleted &&
      response.status(200).json({
        success: true,
        deletedPost,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: 'Fatal Error. Unable to Delete Post.',
    });
  }
};

postController_exports.updatePost = async function(request, response) {
  try {
    const updated = await postDb.update(request.post, { ...request.body });
    const updatedPost = await postDb.getById(request.post);
    updated &&
      response.status(200).json({
        success: true,
        updatedPost,
      });
  } catch {
    response.status(500).json({
      success: false,
      message: 'Fatal Error. Unable to Update Post.',
    });
  }
};
