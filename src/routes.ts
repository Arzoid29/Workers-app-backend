import * as express from 'express';
const router = express.Router();
import { addUser, login } from './services/users.services';

// users routes
router.post('/login', login);
router.post('/users', addUser);

// employee routes


export default router;