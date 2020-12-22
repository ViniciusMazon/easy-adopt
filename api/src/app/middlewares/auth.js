require('dotenv').config();
const jwt = require('jsonwebtoken');

const auth = (request, response, next) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ message: 'Token not provided' });
  }

  try {
    const [, token] = authHeader.split(' ');
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    request.userId = payload.userId;

    return next();
  } catch (err) {
    console.error(err);
    return response.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;