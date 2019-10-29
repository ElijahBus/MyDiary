import express from 'express';
import Diary from '../controllers/EntryController';

const router = express.Router();

router.post('/entries', Diary.create);
router.get('/entries', Diary.getAll);
router.get('/entries/:id', Diary.getOne);
router.put('/entries/:id', Diary.update);
router.delete('/entries/:id', Diary.delete);

export default router;