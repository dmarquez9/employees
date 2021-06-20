import EmployeeTypesModel from '../schemas/EmployeeTypes.schema';
import EmployeesModel from '../schemas/Employees.schema';

export const isNameOrColorUnique = (next: any) => async (root: any, args: any, context: any, info: any) => {
  const { name, color } = args.input

  if (name) {
    const employeeTypeName = await EmployeeTypesModel.findOne({ name });

    if (employeeTypeName) {
      return { message: 'Emplooye type name already exist!', result: null }
    }
  }

  if (name) {
    const employeeTypeColor = await EmployeeTypesModel.findOne({ color });

    if (employeeTypeColor) {
      return { message: 'Emplooye type color already exist!', result: null }
    }
  }

  return next(root, args, context, info);
}

export const isEmployeeTypeValid = (next: any) => async (root: any, args: any, context: any, info: any) => {
  const { employeeTypeId } = args.input

  const employeeType = await EmployeeTypesModel.findById(employeeTypeId);
      
  if (!employeeType) {
    return { message: "Employee Type don't exist", result: null }
  }

  return next(root, args, context, info);
}

export const isEmployeeTypeEmpty = (next: any) => async (root: any, args: any, context: any, info: any) => {
  const { id } = args.input

  const employees = await EmployeesModel.find({ employeeType: id });
      
  if (employees?.length) {
    return { message: "Cannot delete this employee type because it still has employees", result: null }
  }

  return next(root, args, context, info);
}
