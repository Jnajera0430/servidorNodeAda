const express = require('express');
const router = require('./router');
const app = express();
const port = 8000;
const host = 'localhost'


app.use(express.json());
app.use('/',router);

/* app.get('/', (req,res)=>{
    const {body} = req; 
    res.send(`saludos \n ${body}`);
    res.end();
}) */

/* app.get('/task', (req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    res.json({task: db});
    res.end();
}) */

/* app.post('/create_task', (req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    const {body} = req;
    body.id=uuid()
    db.push(body);
    fs.writeFileSync('./db/db.json',JSON.stringify(db)); 
    res.json({task: db})
    res.end();
})
 */
/* app.put('/edit_task/:id',(req,res)=>{
    const {id} = req.params;
    const {body} = req;
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    db.forEach(task=>{
        if(task.id === id){
            task.tarea = body.tarea; 
            task.descripcion = body.descripcion;
        }
    }); 
    fs.writeFileSync('./db/db.json',JSON.stringify(db)); 
    res.json(db); 
}); */

/* app.delete('/delete_task/:id',(req,res)=>{
    const {id} = req.params;
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    const dbf = db.filter(task => task.id != id);
    fs.writeFileSync('./db/db.json',JSON.stringify(dbf)); 

    res.json(dbf);
}) */
app.listen(8000,()=>console.log(` servidor en http://${host}:${port}`));