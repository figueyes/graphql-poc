import { Foo } from '../../../domain/entities/Foo';

export interface ILoadUseCase {
  load: () => Promise<Foo[]>;
}
