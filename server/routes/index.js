import express from 'express';
import auth_route from './auth';

const router = express.Router();

router.use('/api/v1', auth_route);

export default router;