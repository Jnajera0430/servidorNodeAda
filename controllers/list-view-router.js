const fs = require('fs');

const getCompleted =(req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    const taskCompleted = db?.filter(task=>task.estado == true);
    res.json({taskCompleted});
}
const getUnCompleted =(req,res)=>{
    const db = JSON.parse(fs.readFileSync('./db/db.json','utf8'));
    const taskCompleted = db?.filter(task=>task.estado == false);
    res.json({taskCompleted});
}

module.exports={
    getCompleted,
    getUnCompleted
}