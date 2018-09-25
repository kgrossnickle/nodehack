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


exports.getTripwithID = (req, res) => {
  const unknownUser = !(req.user);

  res.render('trips', {
    title: "Finding Trips",
    unknownUser,
  });
};

exports.postTrip = (req, res) => {
	res.redirect('/contact');
  
};
