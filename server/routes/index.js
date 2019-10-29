import express from 'express';
import auth_route from './auth';
import entry_route from './entry';

const router = express.Router();

router.use('/api/v1', auth_route);
router.use('/api/v1', entry_route);

export default router;
