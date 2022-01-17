import {resolve} from "../../../../../shared/infrastructure/http/adapters/resolvers";
import factories from "../../factories";

export default {
  Query: {
    load: async (
      parent: any,
      args: any,
      context: any
    ): Promise<any> => {
      return resolve(factories.makeLoadController());
    },
    hello: () => 'hello'
  },
  Mutation: {
    add: async (
      parent: any,
      args: any,
      context: any
    ): Promise<any> => {
      return resolve(factories.makeAddController(), args);
    }
  }
}
