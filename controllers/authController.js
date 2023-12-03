// const jwt = require('jsonwebtoken');

// exports.authenticateToken = (req, res, next) => {
//   const token = req.header('Authorization');
//   console.log(token);

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized: Missing token' });
//   }

//   jwt.verify(token, 'your_secret_key', (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Forbidden: Invalid token' });
//     }
//     req.user = user;
//     next();
//   });
// };

exports.ensureAuthenticated = (req, res, next) => {
  console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login'); // Redirect to the login page if not authenticated
};
