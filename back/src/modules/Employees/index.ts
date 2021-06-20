
import { GraphQLModule } from '@graphql-modules/core';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

import { isEmployeeTypeValid } from '../../middlewares';

export default new GraphQLModule({
  name: 'employees',
	typeDefs,
	resolvers,
	imports: [],
	resolversComposition: {
		'Mutation.createEmployee': isEmployeeTypeValid
	}
})
