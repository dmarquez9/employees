import { gql } from '@apollo/client';

export const GET_EMPLOYEE_TYPES = gql`
  query {
    employeeTypes {
      id
      name
      color
    }
  }
`;
