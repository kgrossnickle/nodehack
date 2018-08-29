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

exports.postTrip = (req, res) => {
	res.redirect('/contact');

  //   res.render('home', {
  //   title: 'Finding Trips',
  //   unknownUser,
  // });

  // const trip = new Trip({
  //   departDate: req.body.departDate
  //    });

  //   trip.save((err) => {
  //     if (err) { return next(err); }
  //       res.redirect('/contact');
  //   });
 
};
