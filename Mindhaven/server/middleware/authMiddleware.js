import jwt from 'jsonwebtoken';
import User from '../models/user.js';

 export const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith('Bearer ')) {
    try {
      token = req.headers.authorization.split(' ')[1];   // Extract token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);     // Verify token
      req.user = await User.findById(decoded.id).select('-password');     // Attach user to request
      next();      // Proceed to controller
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();     // User is admin — proceed
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};


