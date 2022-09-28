/* eslint-disable no-undef */
const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  console.log('req.session', req.session);
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
