// imports
const lodash = require("lodash");

//! memoizedBlogStats
const memoizedBlogStats = lodash.memoize(
  async (blogs) => {
    // Input validation
    if (!Array.isArray(blogs)) {
      throw new Error("Invalid input: blogs must be an array");
    }

    const totalBlogs = blogs.length;
    const longestBlog = lodash.maxBy(blogs, "title.length");
    const blogsWithPrivacy = blogs.filter((blog) =>
      blog.title.toLowerCase().includes("privacy")
    );
    const uniqueBlogTitles = lodash.uniqBy(blogs, "title");

    return {
      totalBlogs,
      longestBlog: longestBlog.title,
      blogsWithPrivacy: blogsWithPrivacy.length,
      uniqueBlogTitles: uniqueBlogTitles.map((blog) => blog.title),
    };
  },
  (blogs) => `blogStatsCacheKey:${blogs.length}`
);

//! memoizedBlogSearch
const memoizedBlogSearch = lodash.memoize(
  (blogs, query) => {
    // Input validation
    if (!Array.isArray(blogs) || typeof query !== "string") {
      throw new Error(
        "Invalid input: blogs must be an array, query must be a string"
      );
    }

    const matchingBlogs = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(query)
    );

    return matchingBlogs;
  },
  (blogs, query) => `blogSearchCacheKey:${query}:${blogs.length}`
);

module.exports = { memoizedBlogSearch, memoizedBlogStats };
