import { Foo } from '../../../domain/entities/Foo';

export interface IAddUseCase {
  add: (entity: Foo) => Promise<Foo>;
}
