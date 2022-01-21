import { IRead } from '../../../shared/contracts/IRead';
import { Foo } from '../../domain/entities/Foo';
import { IWrite } from '../../../shared/contracts/IWrite';
import { ErrorRepository } from '../../domain/errors';

const fooArray: Foo[] = [
  {
    name: 'foo basic',
    title: 'Foo Basico para Test',
    order: 1,
    baz: {
      name: 'baz',
      street: 'traslavina 449',
    },
  },
  {
    name: 'foo advanced',
    title: 'Foo avanzado para Test',
    order: 2,
    baz: {
      name: 'baz advanced',
      street: '6 norte 1004',
    },
  },
];

export class FooFakeRepository implements IRead<Foo>, IWrite<Foo> {
  get(): Promise<Foo[]> {
    try {
      return Promise.resolve(fooArray);
    } catch (e) {
      throw new ErrorRepository();
    }
  }

  add(entity: Foo): Promise<Foo> {
    fooArray.push(entity);
    return Promise.resolve(entity);
  }
}
