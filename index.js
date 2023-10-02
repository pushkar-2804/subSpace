const express = require("express");
require("dotenv").config();
const fetchBlogData = require("./middleware/blogApi");
const blogRoute = require("./routes/blog");
const speedChecker = require("./middleware/speedChecker");
const { handleError } = require("./utils/errorHandle");

const app = express();

//!Specifying Port
const port = 3000 || process.env.PORT;

//!Middlewares
app.use(speedChecker);
app.use(fetchBlogData);
app.use((err, req, res, next) => {
  console.log(err);
  handleError(err, req, res, next);
});

app.get("/", function (req, res) {
  res.send("Hello");
});

//!Base Route
app.use("/api", blogRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
