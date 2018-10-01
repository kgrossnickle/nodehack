/**
 * GET /
 * Home page.
 */
//  var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { window } = new JSDOM();
// const { document } = (new JSDOM('')).window;
// global.document = document;
// var $ = jQuery = require('jquery')(window);


// = require('jquery');//(require("jsdom").jsdom().parentWindow);
var fuse = require("fuse.js");
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.postTrip = (req, res) => {
		console.log(req.body['dateto0']);
		if (req.body['isOneWay'] === "roundtrip"){
			var params = 'flights?flyFrom='+req.body['flyingfrom0'].substring(0,3)+'&to='+req.body['flyingto0'].substring(0,3)+'&dateFrom='+req.body['departdatehidden']+'&dateTo='+req.body['returndatehidden']+'&returnFrom='+req.body['departdatehidden']+'&returnTo='+req.body['returndatehidden']+'&daysInDestinationFrom='+req.body['minNights']+'&daysInDestinationTo='+req.body['maxNights']+'&typeFlight=round'+'&partner=picky';
		}
		//if(req.body.isOneWay)		

//      {"isOneWay":"roundtrip","minNights":"2","maxNights":"7","departdatehidden":"19/09/2018","returndatehidden":"16/11/2018","_csrf":"7TWw8hU8WRRixcwHL8aqdfNcLRrj+/eTYOsTY=","flyingfrom0":"FAA - Faranah - Faranahf","flyingto0":"DFW - Dallas Fort Worth Intl - Dallas-Fort Worth","datefrom0":"September 19 2018","dateto0":"November 16 2018"}

		//   flights?flyFrom='+from+'&to='+to+'&dateFrom='+ddate+'&dateTo='+rdate+'&returnFrom='+ddate+'&returnTo='+rdate+'&daysInDestinationFrom='+minNights+'&daysInDestinationTo='+maxNights+'&typeFlight=round'+'&partner=picky'
		  res.redirect("trips/"+params);
		  var request = params;
		  //request = request.slice(7);
		  //console.log(req.params['flyFrom']);
		  //console.log("trip query is: "+request);
		  // res.render('trips', {
		  //   title: "Finding Trips",
		  //   request: request
		  // });
	    console.log('Body- ' + JSON.stringify(req.body));

};