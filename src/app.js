const express = require('express');
const loginRouter = require('./routes/loginRouter');
const taskRouter = require('./routes/taskRouter');
const app = express();
require('dotenv').config();
const port = process.env.PORT 
//middlewares
app.use(express.json());


//routes
app.use("/app/task",taskRouter);
app.use("/app/login",loginRouter);

//server
app.listen(port, ()=>{
    console.log(`servidor corriendo en: http://localhost:${port}`); 
})