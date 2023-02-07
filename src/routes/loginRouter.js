const {Router} = require("express");
const { postDatosLogin } = require("../controllers/login");
const loginRouter = Router();

loginRouter.post("/",postDatosLogin);


module.exports= loginRouter;