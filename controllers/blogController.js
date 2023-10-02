// Imports
const { handleError } = require("../utils/errorHandler");
const {
  memoizedBlogStats,
  memoizedBlogSearch,
} = require("../utils/memoizedBlog");

// Controller to get Blog Stats
blogStats = async (req, res, next) => {
  try {
    const blogs = req.blogData;

    const blogStats = await memoizedBlogStats(blogs);

    return res.json(blogStats);
  } catch (error) {
    console.error(error); // Use console.error for errors
    handleError(error, req, res, next);
  }
};

// Controller to search for Blogs
blogSearch = async (req, res, next) => {
  const blogs = req.blogData;
  const query = req.query.query.toLowerCase();

  try {
    const matchingBlogs = memoizedBlogSearch(blogs, query);

    return res.json(matchingBlogs);
  } catch (error) {
    console.error(error); // Use console.error for errors
    handleError(error, req, res, next);
  }
};

module.exports = { blogSearch, blogStats };
