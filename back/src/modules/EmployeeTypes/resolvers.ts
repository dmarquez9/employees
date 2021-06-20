import EmployeeTypesController from '../../controllers/EmployeeTypes.controller';

export default {
  Query: {
    employeeTypes: EmployeeTypesController.getAll,
  },
  Mutation: {
    createEmployeeType: EmployeeTypesController.create,
    updateEmployeeType: EmployeeTypesController.update,
    deleteEmployeeType: EmployeeTypesController.remove,
    deleteAllEmployeeTypes: EmployeeTypesController.removeAll,
  }
}
