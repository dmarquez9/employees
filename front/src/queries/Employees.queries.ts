import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query (
    $limit: Int!
    $offset: Int!
  ) {
    employees (
      limit: $limit
      offset: $offset
    ) {
      data {
        id
        name
        createdAt
        employeeType {
          id
          color
          name
        }
      }
      total
    }
  }
`;

export const ADD_EMPLOYEES = gql`
  mutation (
    $name: String!,
    $employeeTypeId: ID!
  ) {
    createEmployee(input: {
      name: $name
      employeeTypeId: $employeeTypeId
    }) {
      message
      result {
        id
        name
        createdAt
        employeeType {
          id
          name
          color
        }
      }
    }
  }
`;

export const UPDATE_EMPLOYEES = gql`
  mutation (
    $id: ID!,
    $name: String!,
    $employeeTypeId: ID!
  ) {
    updateEmployee(input: {
      id: $id,
      name: $name,
      employeeTypeId: $employeeTypeId
    }) {
      message
      result {
        id
        name
        createdAt
        employeeType {
          id
          name
          color
        }
      }
    }
  }
`;

export const DELETE_EMPLOYEES = gql`
  mutation ($id: ID!) {
    deleteEmployee(input: {
      id: $id
    }) {
      message
    }
  }
`;
