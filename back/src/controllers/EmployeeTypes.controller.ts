import EmployeeTypesModel from '../schemas/EmployeeTypes.schema';

type EmployeeTypeInput = {
  id: string;
  name: string;
  color: string;
}

type CreateEmployeeTypeInput = Omit<EmployeeTypeInput, 'id'>
type RemoveEmployeeTypeInput = Omit<EmployeeTypeInput, 'name' | 'color'>

type GetEmployeeTypes = {
  limit: number;
  offset: number;
}
class EmployeeTypesController {
  static getAll = async (parent: any, args: GetEmployeeTypes) => {
    const { limit, offset } = args
    try {
      const result = await EmployeeTypesModel
        .find()
        .limit(limit)
        .skip(offset);

      const total = await EmployeeTypesModel.countDocuments();
      return { data: result, total }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  };

  static create = async (parent: any, args: { input: CreateEmployeeTypeInput }) => {
    const { name, color } = args.input;
  
    try {
      const employeeType = new EmployeeTypesModel();
      employeeType.name = name
      employeeType.color = color
    
      const result = await employeeType.save();  
      return { message: "Employee Type created!", result }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static update = async (parent: any, args: { input: EmployeeTypeInput }) => {
    const { id, color, name } = args.input;  
    try {
      let employeeType = await EmployeeTypesModel.findById(id)
      
      if (employeeType) {
        employeeType.color = color as string;
        employeeType.name = name as string;
        await employeeType.save();
        return { message: "Employee Type updated!", result: employeeType }
      }

      return { message: "Employee Type doesn't exist!", result: null }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static remove = async (parent: any, args: { input: RemoveEmployeeTypeInput }) => {
    const { id } = args.input;  
    try {
      let employeeType = await EmployeeTypesModel.findById(id)
      
      if (employeeType) {
        await employeeType.delete();
        return { message: "Employee Type deleted!" }
      }
  
      return { message: "Employee Type doesn't exist!" }
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  }

  static removeAll = async () => {
    try {
      await EmployeeTypesModel.deleteMany()
      return { message: 'Deleted all employee types.' };
    } catch(e) {
      throw new Error(JSON.stringify(e));
    }
  };
};

export default EmployeeTypesController;
