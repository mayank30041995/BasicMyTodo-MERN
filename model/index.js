const dbconfig = require("../db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbconfig.url;
db.todolist = require("./mytodomodel.js")(mongoose);

module.exports = db;
