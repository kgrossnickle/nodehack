const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');
const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  departDate: String
}, { timestamps: true });

/**
 * Password hash middleware.
 */


/**
 * Helper method for validating user's password.
 */



const Trip = mongoose.model('Trip', tripSchema);

module.exports = User;