const mongooes = require("mongoose");

const taskModel = mongooes.Schema({
  title: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false,
  }
});
module.exports = mongooes.model("task", taskModel);
