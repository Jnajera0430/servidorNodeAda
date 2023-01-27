const fs = require('fs');
const { uuid } = require('uuidv4');


const getMensaje = (req,res)=>{
    res.json({token:req.token})
}

const getMensajeIdioma = (req,res)=>{
    const {idioma} = req.params;
    const {nombre} = req.body;
    if(idioma == 'es')return res.status(200).send(`saludos  mi amigo ${nombre} bienvenido a mi aplicacion`);
    if(idioma == 'en')return res.status(200).send(`hellow mafrend ${nombre} welcome to my app`);
    res.end();
}

const getConteoDeNum = (req,res)=>{
    const {num}=req.params;
    let array=[];
    for (let index = 0; index <= num; index++) {
        array = [...array,index];
    }
    res.status(200).json(`Conteo: ${array}`);
}


const getTask = (req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    res.json({task: db});
    res.end();
}

const postTask = (req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    const {body} = req;
    body.id=uuid();
    body.estado = false;
    db.push(body);
    fs.writeFileSync('./db/db.json',JSON.stringify(db)); 
    res.json({task: db})
    res.end();
}
const editTask = (req,res)=>{
    const {id} = req.params;
    const {body} = req;
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    db.forEach(task=>{
        if(task.id == id){
            task.tarea = body.tarea; 
            task.descripcion = body.descripcion;
        }
    }); 
    fs.writeFileSync('./db/db.json',JSON.stringify(db)); 
    res.json({tasks:db}); 
}

const deleteTask =(req,res)=>{
    const {id} = req.params;
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    const dbf = db.filter(task => task.id != id);
    fs.writeFileSync('./db/db.json',JSON.stringify(dbf)); 

    res.json({tasks:dbf});
}

const editEstado = (req,res)=>{
    const {id} = req.params;
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf-8'));
    db.forEach(task=>{
        if(task.id == id){
            task.estado = !task.estado; 
        }
    }); 
    fs.writeFileSync('./db/db.json',JSON.stringify(db)); 
    res.json({tasks:db}); 
}


module.exports = {
    getMensaje,
    getTask,
    postTask,
    editTask,
    deleteTask,
    editEstado,
    getMensajeIdioma,
    getConteoDeNum
}