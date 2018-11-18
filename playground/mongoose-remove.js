const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

// Todo.remove({}).then(result => {
//   console.log(result);
// });

// Todo.findOneAndRemove

// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: "5bebee26d79ea885b89bcfa6" }).then(todo => {});

Todo.findByIdAndRemove("5bebee26d79ea885b89bcfa6").then(todo => {
  console.log(todo);
});
