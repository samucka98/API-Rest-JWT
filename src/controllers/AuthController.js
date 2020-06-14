const jwt = require('jsonwebtoken');

class AuthController {
  
  auth(request, response, next) {
    const token = request.header('authorization-token');

    if (!token) {
      return response.status(401).send('Access Denied');
    }

    try {
      const authorization = jwt.verify(token, process.env.TOKEN_SECRET);
      request.user = authorization;
      next();
    } catch (error) {
        response.status(401).send('Access Denied');
    }
  }
}

module.exports = AuthController;