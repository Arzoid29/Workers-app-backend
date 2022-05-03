import * as express from 'express';
const router = express.Router();
import { addEmployees, deleteEmployees, editEmployees, getEmployees, getEmployeesById } from './services/employee.services';
import { addUser, login } from './services/users.services';

// users routes
router.post('/login', login);
router.post('/users', addUser);

// employee routes
router.get('/getEmployees',getEmployees);
router.get('/getEmployees/:id',getEmployeesById);
router.post('/addEmployees',addEmployees);
router.put('/editEmployees/:id',editEmployees);
router.delete('/deleteEmployees/:id',deleteEmployees);

export default router;