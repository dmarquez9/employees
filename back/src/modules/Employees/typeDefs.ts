export default `
  scalar Date

  type EmployeeTypes {
    id: ID!
    name: String!
    color: String!
	}
  
  type Employees {
    id: ID!
    name: String!
    createdAt: Date
    employeeType: EmployeeTypes
  }

  input InputEmployee {
    name: String!
    employeeTypeId: ID!
  }

  input InputUpdateEmployee {
    name: String!
    employeeTypeId: ID!
    id: ID!
  }

  input InputDeleteEmployee {
    id: ID!
  }

  type EmployeeResponse {
    message: String!
    result: Employees
  }

  type DeleteResponse {
    message: String!
  }

  type Mutation {
    createEmployee(input: InputEmployee): EmployeeResponse!
    updateEmployee(input: InputUpdateEmployee): EmployeeResponse!
    deleteEmployee(input: InputDeleteEmployee): DeleteResponse!
    deleteAllEmployees: DeleteResponse!
  }

  type Query {
    employees: [Employees]
  }
`
