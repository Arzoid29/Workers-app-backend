import Employee from '../models/employees';



export const getEmployees = async (req: any, res: any) => {
    return res.json({
        status: 200,
        message: 'Employees',
        employees: await Employee.findAll()
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
        const employee = await Employee.findByPk(id);
        if(employee) {
            await employee.destroy();
            res.json({ employee, status: 201 });
        }
        else {
            res.json({ status: 404, message: 'Employee not found' });
        }
} catch (error) {
    throw error;
}   
};
