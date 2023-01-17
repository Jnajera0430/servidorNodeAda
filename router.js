const {Router}=require('express');
const { getMensaje, getTask, postTask, editTask, deleteTask, editEstado } = require('./controllers/list-edit-router');
const { getCompleted, getUnCompleted } = require('./controllers/list-view-router');

const router = Router();
router.get('/',getMensaje);
router.get('/task',getTask);
router.post('/create_task',postTask);
router.put('/edit_task/:id',editTask);
router.put('/edit_task_estado/:id',editEstado);
router.delete('/delete_task/:id',deleteTask);



router.get('/task_completed',getCompleted);
router.get('/task_un_completed',getUnCompleted);

module.exports = router;