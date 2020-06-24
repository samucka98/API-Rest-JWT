const jwt = require('jsonwebtoken');

class Auth {
  
  jwtAuth(request, response, next) {
    const token = request.header('authorization-token');

    if (!token) {
      return response.status(401).send('Access Denied token');
    } else console.log(token);

    try {
      const authorization = jwt.verify(token, process.env.TOKEN_SECRET);
      request.user = authorization;
      next();
    } catch (error) {
      return response.status(401).send(error);
    }
  }
}

module.exports = Auth;