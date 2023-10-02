//imports
const { handleError } = require("../utils/errorHandler");
const axios = require("axios");

//Api Call
async function fetchBlogData(req, res, next) {
  try {
    const response = await axios.get(
      "https://intent-kit-16.hasura.app/api/rest/blogs",
      {
        headers: {
          "x-hasura-admin-secret":
            "32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6",
        },
      }
    );
    req.blogData = response.data.blogs;
    next();
  } catch (error) {
    console.error(error);
    handleError(error, req, res, next);
  }
}

//exports
module.exports = fetchBlogData;
