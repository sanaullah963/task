const express = require("express");
const getTask = require("../controlar/getTask")
const sendData = require('../controlar/sendData');
const checked = require("../controlar/checked");
const deletetask = require("../controlar/deletetask");
const taskRouter = express.Router();

taskRouter.post("/", getTask);
taskRouter.get("/", sendData);
taskRouter.post("/checked", checked);
taskRouter.delete(`/delete/:id`, deletetask);

module.exports = taskRouter;
