import * as express from 'express';
const router = express.Router();
import { addEmployees, deleteEmployees, editEmployees, getEmployees } from './services/employee.services';
import { addUser, login } from './services/users.services';

// users routes
router.post('/login', login);
router.post('/users', addUser);

// employee routes
router.get('/getEmployees',getEmployees);
router.post('/addEmployees',addEmployees);
router.put('/editEmployees/:id',editEmployees);
router.put('/deleteEmployees/:id',deleteEmployees);

export default router;