 const task = require('../model/task')

const sendData=async(req,res)=>{
const allTask = await task.find().sort({_id:-1})
res.json(allTask)
}
module.exports = sendData