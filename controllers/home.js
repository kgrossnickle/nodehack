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

exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.postTrip = (req, res) => {

};