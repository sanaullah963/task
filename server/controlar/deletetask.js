const task = require("../model/task")


const deletetask = async(req,res)=> {
  const taskId =await req.params.id
  try {
    await task.findByIdAndDelete(taskId)
    res.send("data delet sussessfull")
  } catch (error) {
    res.send(error)
  }
  
  
}

module.exports = deletetask