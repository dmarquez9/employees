import EmployeesModel from '../schemas/Employees.schema';

type EmployeeInput = {
  name: string;
  employeeTypeId: string;
}

type UpdateEmployeeInput = EmployeeInput & {
  id: string;
}

type DeleteEmployeeInput = {
  id: string;
}

class EmployeesController {
  static getAll = async () => {
    try {
      return await EmployeesModel.find().populate('employeeType');
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  };

  static create = async (parent: any, args: { input: EmployeeInput }) => {
    const { name, employeeTypeId } = args.input;
 
    try {
      const employee = new EmployeesModel();
      employee.name = name
      employee.employeeType = employeeTypeId

      await employee.save();

      const result = await EmployeesModel.populate(employee, 'employeeType')
      return { message: "Employee created!", result }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static update = async (parent: any, args: { input: UpdateEmployeeInput }) => {
    const { name, employeeTypeId, id } = args.input; 
    try {
      let employee = await EmployeesModel.findById(id)
      
      if (employee) {
        employee.name = name;
        employee.employeeType = employeeTypeId;
    
        await employee.save();
    
        const result = await EmployeesModel.populate(employee, 'employeeType')
        return { message: "Employee Type updated!", result }
      }

      return { message: "Employee Type doesn't exist!", result: null }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static remove = async (parent: any, args: { input: DeleteEmployeeInput }) => {
    const { id } = args.input;  
    try {
      let employeeType = await EmployeesModel.findById(id)
      
      if (employeeType) {
        await employeeType.delete();
        return { message: "Employee Type deleted!" }
      }
  
      return { message: "Employee Type doesn't exist!" }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }
};

export default EmployeesController;
