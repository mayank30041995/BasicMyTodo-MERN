var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TodoListSchema = new Schema({
  name: {
    type: String,
    require: "name is required",
  },
  description: {
    type: String,
    require: "description is required",
  },
  status: {
    type: [
      {
        type: String,
        enum: ["pending", "doing", "done"],
      },
    ],
    default: ["doing"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TodoList", TodoListSchema);
