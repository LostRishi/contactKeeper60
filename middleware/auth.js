const jwt = require("jsonwebtoken");
const config = require("config");

// A middleware function
module.exports = function (req, res, next) {
  //Get the token from header
  const token = req.header("x-auth-token");

  //check if not token
  if (!token) {
    return res.status(401).json({ msg: "No Token ,authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret")); // here we are storing payload in decoded variable 
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not Valid" });
  }
};
