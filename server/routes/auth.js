import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// User sign up
router.post('/users', UserController.create);
// User log in
router.post('/users/login', UserController.login);

export default router;