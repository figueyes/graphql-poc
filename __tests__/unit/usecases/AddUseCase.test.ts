import {FooFakeRepository} from "../../../src/foos/infrastructure/fake";
import {Foo} from "../../../src/foos/domain/entities/Foo";
import {AddUseCase} from "../../../src/foos/application/usecases/AddUseCase";
import {ErrorRepository, ErrorUseCase} from "../../../src/foos/domain/errors";

describe('Add foos use case', function () {
  const repository = new FooFakeRepository();
  const foo: Foo = {
    name: 'foo',
    title: 'foo test',
    order: 1,
    baz: {
      name: 'baz',
      street: 'baz street',
    },
  }
  it('add foo success', async () => {
    jest.spyOn(repository, 'add')
      .mockResolvedValue({
        name: 'foo',
        title: 'foo test',
        order: 1,
        baz: {
          name: 'baz',
          street: 'baz street',
        },
      });
    const useCase = new AddUseCase(repository);

    try {
      const response = await useCase.add(foo);
      const expectedResponse = {
        name: 'foo',
        title: 'foo test',
        order: 1,
        baz: {
          name: 'baz',
          street: 'baz street',
        },
      }
      return expect(response).toEqual(expectedResponse);
    } catch (e) {
      throw e;
    }
  });

  it('add foo throws error', async () => {
    jest.spyOn(repository, 'add')
      .mockResolvedValue(Promise.reject(new ErrorRepository()));
    const useCase = new AddUseCase(repository);

    try {
      await useCase.add(foo);
    } catch (e) {
      return expect(e).toEqual(new ErrorUseCase());
    }
  });
});
