import { resolve } from '../../../../../shared/infrastructure/http/handlers/resolvers';
import factories from '../../factories';
import { Foo } from '../../../../domain/entities/Foo';
import { StarWar } from '../../../../../shared/infrastructure/http/clients/api/starwars';

export const fooResolver = {
  Query: {
    load: async (): Promise<Array<Foo>> => resolve(factories.makeLoadController()),
    starWars: async (): Promise<string[]> => StarWar.getInstance().listTitleFilms(),
  },
  Mutation: { add: async (parent: any, args: any): Promise<Foo> => resolve(factories.makeAddController(), args) },
};
