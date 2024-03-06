const taskModel = require('../model/task')
const getTask = async (req, res) => {

  const {task} = await req.body;
  const newTask = await taskModel({title:task})
  newTask.save()

  res.send({data:'success'})
};
module.exports = getTask;
