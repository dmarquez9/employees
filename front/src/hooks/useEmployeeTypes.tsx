import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE_TYPES } from '../queries/EmployeeTypes.queries';

function useEmployeeTypes() {
  const { loading, data } = useQuery(GET_EMPLOYEE_TYPES);
  return {
    loading,
    data: data?.employeeTypes
  }
}

export default useEmployeeTypes
