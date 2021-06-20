import EmployeeTypesModel from '../schemas/EmployeeTypes.schema';


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
