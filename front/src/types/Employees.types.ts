import { EmployeeTypesProps } from "./EmployeeTypes.types";

export type EmployeesProps = {
  id: string;
  name: string;
  createdAt: string;
  employeeType: EmployeeTypesProps
}
