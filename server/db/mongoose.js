var mongoose = require("mongoose");

mongoose.promise = global.Promise;
// mongoose.Promise = require("bluebird");
// assert.equal(query.exec().constructor, require("bluebird"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp"
);

module.exports = {
  mongoose
};
