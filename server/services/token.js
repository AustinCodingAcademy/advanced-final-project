const jwt = require("jwt-simple");
//token
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ userId: user.id, iat: timestamp }, process.env.SECRET);
}


exports.tokenForUser = tokenForUser;


