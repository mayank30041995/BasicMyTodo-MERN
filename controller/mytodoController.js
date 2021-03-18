const db = require("../model");
const Todolist = db.todolist;

exports.getTodoList = (req, res) => {
  Todolist.find({}, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.postTodoList = (req, res) => {
  var newTodo = new Todolist(req.body);
  newTodo.save((err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.getTodoListById = (req, res) => {
  Todolist.findById(req.params.todoId, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};

exports.postTodoList = (req, res) => {
  Todolist.findOneAndUpdate(req.params.todoId, (err, todo) => {
    if (err) res.send(err);
    res.json(todo);
  });
};
