const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://admin:admin123@ds255253.mlab.com:55253/udemy_todo');
