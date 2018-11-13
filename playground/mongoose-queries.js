const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");
const { ObjectID } = require("mongodb");

var userId = "5be81f5df0654698686880ef";

if (!ObjectID.isValid(userId)) {
  console.log("ID not valid");
}

User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("UserID not found");
    }
    console.log("User by ID", user);
  })
  .catch(e => console.log(e));

// var id = "5be90f27deaf27666f7bfcfd11";

// if (!ObjectID.isValid(id)) {
//   console.log("ID not valid");
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log("Id not found");
//     }
//     console.log("Todo by id", todo);
//   })
//   .catch(e => console.log(e));
