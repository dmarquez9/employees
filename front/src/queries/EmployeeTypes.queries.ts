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

export const ADD_EMPLOYEE_TYPE = gql`
  mutation (
    $name: String!,
    $color: String!
  ) {
    createEmployeeType(input: {
      name: $name
      color: $color
    }) {
      message
      result {
        id
        name
        color
      }
    }
  }
`;

export const UPDATE_EMPLOYEE_TYPE = gql`
  mutation (
    $id: ID!,
    $name: String!,
    $color: String!
  ) {
    updateEmployeeType(input: {
      id: $id,
      name: $name,
      color: $color
    }) {
      message
      result {
        id
        name
        color
      }
    }
  }
`;

export const DELETE_EMPLOYEE_TYPE = gql`
  mutation ($id: ID!) {
    deleteEmployeeType(input: {
      id: $id
    }) {
      message
    }
  }
`;
