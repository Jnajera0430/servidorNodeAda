const {Router}=require('express');
const { getMensaje, getTask, postTask, editTask, deleteTask, editEstado } = require('./controllers');

const router = Router();
router.get('/',getMensaje);
router.get('/task',getTask);
router.post('/create_task',postTask);
router.put('/edit_task/:id',editTask);
router.put('/edit_task_estado/:id',editEstado);
router.delete('/delete_task/:id',deleteTask);


module.exports = router;