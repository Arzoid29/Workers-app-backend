import { where } from 'sequelize/types';
import Employee from '../models/employees';



export const getEmployees = async (req: any, res: any) => {
    return res.json({
        status: 200,
        message: 'Employees',
        employees: await Employee.findAll()
    });
};
export const getEmployeesById = async (req: any, res: any) => {
    const { id } = req.params;
    return res.json({
        status: 200,
        message: 'Employees',
        employees: await Employee.findOne({ where: { id }})
    });
};
export const addEmployees = async (req: any, res: any) => {
    
    const { body } = req;
    try {
        const employee = await Employee.create({ name: body.name, lastName: body.lastName, documentId: body.documentId, salary: body.salary });
        res.json({ employee, status: 201 });
        
    } catch (error) {
        
        throw error;
    }
};
export const editEmployees = async (req: any, res: any) => {
    
    const { body } = req;
    const { id } = req.params;
    try {
        const employee = await Employee.update({ name: body.name, lastName: body.lastName, documentId: body.documentId, salary: body.salary }, { where: { id: id }});
        res.json({ employee, status: 201 });
        
    } catch (error) {
        
        throw error;
    }
};
export const deleteEmployees = async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const employee = await Employee.destroy({ where: { id: parseInt(id)}});
        res.json({ employee, status: 201 });
        
    } catch (error) { 
            throw error;
        }
};
