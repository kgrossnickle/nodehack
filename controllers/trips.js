/**
 * GET /
 * Home page.
 */
var url = require('url');

exports.getTrips = (req, res) => {
  const unknownUser = !(req.user);

  res.render('trips', {
    title: 'Finding Trips',
    unknownUser,
  });
};


exports.getTripwithID = (req, res) => {
  const unknownUser = !(req.user);
  //get rid of /trips/
  var q = url.parse(req.url, true);
  var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
  var request = req.url;
  request = request.slice(7);
  console.log(req.params['flyFrom']);
  console.log("trip query is: "+request);

  res.render('trips', {
    title: "Finding Trips",
    unknownUser,
    request: request,
    flyFrom: qdata.flyFrom,
    to: qdata.to,
    dateFrom : qdata.returnFrom
  });
};

exports.postTrip = (req, res) => {
	res.redirect('/contact');
  
};
