import { Schema, model } from 'mongoose';

interface Employees{
  name: string;
  employeeType: any;
}

const schema = new Schema<Employees>({
  name: { type: String, required: true },
  employeeType: { type: Schema.Types.ObjectId, required: true, ref: 'EmployeeTypes' }
}, { timestamps: true });

const EmployeesModel = model<Employees>('Employees', schema);
export default EmployeesModel
