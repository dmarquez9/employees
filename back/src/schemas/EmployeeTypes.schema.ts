import { Schema, model } from 'mongoose';

interface EmployeeTypes {
  name: string;
  color: string;
}

const schema = new Schema<EmployeeTypes>({
  name: { type: String, required: true, unique: true },
  color: { type: String, required: true, unique: true }
});

const EmployeeTypesModel = model<EmployeeTypes>('EmployeeTypes', schema);
export default EmployeeTypesModel
