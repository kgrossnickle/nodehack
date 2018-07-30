/**
 * GET /
 * Home page.
 */
exports.getTrips = (req, res) => {
  const unknownUser = !(req.user);

  res.render('trips', {
    title: 'Finding Trips',
    unknownUser,
  });
};
