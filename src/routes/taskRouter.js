const {Router} = require("express");
const { getTaskAll, getTaskUser } = require("../controllers/taskControllers");
const { authDecodeToken } = require("../middlewares/auth");
const taskRouter = Router();

taskRouter.get("/",authDecodeToken,getTaskAll);
taskRouter.get("/user",authDecodeToken,getTaskUser);

module.exports= taskRouter;