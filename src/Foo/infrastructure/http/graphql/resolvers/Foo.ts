import { resolve } from '../../../../../shared/infrastructure/http/adapters/resolvers';
import factories from '../../factories';

export default {
  Query: {
    load: async (): Promise<any> => resolve(factories.makeLoadController()),
    hello: (): string => 'hello',
  },
  Mutation: {
    add: async (parent: any, args: any): Promise<any> =>
      resolve(factories.makeAddController(), args),
  },
};
