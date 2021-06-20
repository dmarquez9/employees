import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { GraphQLModule } from '@graphql-modules/core';

import employeeTypesModule from './modules/EmployeeTypes';
import employeesModule from './modules/Employees';

export async function startServer() {
  const app = express();

  const { schema, context } = new GraphQLModule({
    name: 'app',
    imports: [employeeTypesModule, employeesModule],
  });

  const server = new ApolloServer({
    schema,
    context,
  });

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
