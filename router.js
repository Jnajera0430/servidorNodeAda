const {Router}=require('express');
const { getMensaje, getTask, postTask, editTask, deleteTask, editEstado, getMensajeIdioma, getConteoDeNum } = require('./controllers/list-edit-router');
const { getCompleted, getIncompleted } = require('./controllers/list-view-router');
const { authPost, authIdioma, authLimit, authPostJWT, authDecodeJWT } = require('./middleware/auth');

const router = Router();
router.get('/',authPostJWT,authDecodeJWT,getMensaje);
router.get('/:idioma',authIdioma,getMensajeIdioma);
router.get('/conteo/:num',authLimit,getConteoDeNum);

router.get('/task',getTask);
router.post('/create_task',authPost,postTask);
router.put('/edit_task/:id',editTask);
router.put('/edit_task_estado/:id',editEstado);
router.delete('/delete_task/:id',deleteTask);



router.get('/task_completed',getCompleted);
router.get('/task_un_completed',getIncompleted);

module.exports = router;