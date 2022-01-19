import { FooFakeRepository } from "../../../src/foos/infrastructure/fake";
import { LoadUseCase } from "../../../src/foos/application/usecases/LoadUseCase";
import {ErrorRepository, ErrorUseCase} from "../../../src/foos/domain/errors";

describe('Load foos use case', function () {
  const repository = new FooFakeRepository();
  it('load foo success', async ()=> {
    jest.spyOn(repository, 'get')
      .mockResolvedValue([
        {
          name: 'foo',
          title: 'foo test',
          order: 1,
          baz: {
            name: 'baz',
            street: 'baz street',
          },
        },
      ]);
    const useCase = new LoadUseCase(repository);

    try {
      const response = await useCase.load();
      const expectedResponse = [{
        name: 'foo',
        title: 'foo test',
        order: 1,
        baz: {
          name: 'baz',
          street: 'baz street',
        },
      }];
      return expect(response).toEqual(expectedResponse);
    } catch (e) {
      throw e;
    }
  });

  it('load foo throws error', async ()=> {
    jest.spyOn(repository, 'get')
      .mockResolvedValue(Promise.reject(new ErrorRepository()));
    const useCase = new LoadUseCase(repository);
    try {
      await useCase.load();
    } catch (e) {
      return expect(e).toEqual(new ErrorUseCase());
    }
  });
});
