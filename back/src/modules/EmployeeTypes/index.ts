
import { GraphQLModule } from '@graphql-modules/core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { isNameOrColorUnique } from '../../middlewares';

export default new GraphQLModule({
  name: 'employeeTypes',
	typeDefs,
	resolvers,
	imports: [],
	resolversComposition: {
		'Mutation.createEmployeeType': isNameOrColorUnique,
		'Mutation.updateEmployeeType': isNameOrColorUnique,
  }
})
