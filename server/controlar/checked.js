const task = require("../model/task");

const checked = async (req, res) => {
  const { id } = await req.body;
  try {
    await task.findByIdAndUpdate(id, { checked: true });
    res.send('chsnge state')
  } catch (error) {
    res.send(error)
  }
   
};
module.exports = checked;
