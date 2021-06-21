import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE_TYPES } from '../queries/EmployeeTypes.queries';

function useEmployeeTypes() {
  const { loading, data, refetch } = useQuery(GET_EMPLOYEE_TYPES);
  return {
    loading,
    data: data?.employeeTypes,
    refetch
  }
}

export default useEmployeeTypes
