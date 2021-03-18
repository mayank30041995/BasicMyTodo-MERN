module.exports = (app) => {
  const tutorials = require("../controller/mytodoController");

  var router = require("express").Router();

  router.post("/", postTodoList.create);

  router.get("/", getTodoList.findAll);

  router.get("/:id", getTodoListById.findOne);

  router.put("/:id", postTodoList.update);

  router.delete("/:id", deleteTodoListById.delete);

  router.delete("/", deleteTodoList.deleteAll);

  app.use("/api/todolist", router);
};
