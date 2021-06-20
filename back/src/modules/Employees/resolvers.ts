import EmployeesController from '../../controllers/Employees.controller';

export default {
  Query: {
    employees: EmployeesController.getAll,
  },
  Mutation: {
    createEmployee: EmployeesController.create,
    updateEmployee: EmployeesController.update,
    deleteEmployee: EmployeesController.remove
  }
}
