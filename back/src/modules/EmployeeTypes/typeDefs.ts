export default `
  type EmployeeTypes {
    id: ID!
    name: String!
    color: String!
	}

  input InputEmployeeType {
    name: String!
    color: String!
  }

  input InputUpdateEmployeeType {
    id: ID!
    name: String
    color: String
  }

  input InputDeleteEmployeeType {
    id: ID!
  }

  type GenericResponse {
    message: String!
    result: EmployeeTypes
  }

  type MessageResponse {
    message: String!
  }

  type Mutation {
    createEmployeeType(input: InputEmployeeType): GenericResponse!
    updateEmployeeType(input: InputUpdateEmployeeType): GenericResponse!
    deleteEmployeeType(input: InputDeleteEmployeeType): MessageResponse!
    deleteAllEmployeeTypes: MessageResponse!
  }

  type EmployeeTypesQuery {
    data: [EmployeeTypes]
    total: Int!
  }
  
  type Query {
    employeeTypes(limit: Int! offset: Int!): EmployeeTypesQuery!
  }
`
