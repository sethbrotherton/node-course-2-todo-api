var express = require("express");
var bodyParser = require("body-parser");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({
        todos
      });
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(3000, () => {
  console.log("Started on port 300");
});

// var newUser = new User({
//   email: "  sethbrotherton@hotmail.com "
// });

// newUser.save().then(
//   doc => {
//     console.log("Saved user", doc._doc);
//   },
//   e => {
//     console.log(e);
//   }
// );

// var newTodo = new Todo({
//   text: "Cook dinner"
// });

// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

// var secondTodo = new Todo({
//   text: " Edit this video "
// });

// secondTodo.save().then(
//   doc => {
//     console.log("Saved second todo", doc);
//   },
//   e => {
//     console.log(e);
//   }
// );

module.exports = {
  app
};
