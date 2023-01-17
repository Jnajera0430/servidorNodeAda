const express = require('express');
const router = require('./router');
const app = express();
const port = 8000;
const host = 'localhost'


app.use(express.json());
app.use('/app',router);

app.listen(8000,()=>console.log(` servidor en http://${host}:${port}`));