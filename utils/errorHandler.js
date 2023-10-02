//Error Handling
const handleError = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  return res.status(statusCode).json({ error: error.message });
};

//exports
module.exports = {
  handleError,
};
