var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minleght:1
  }
});

module.exports = {User};
