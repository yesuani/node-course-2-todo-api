var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var Promise = require("bluebird");
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
