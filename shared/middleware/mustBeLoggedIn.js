module.exports = function() {
  return (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }

    if (req.accepts('json')) {
      res.status(403).json({
        message: 'You must be logged in to perform this action.'
      });
    } else {

      res.status(403).render('forbidden');
    }
  }
}
