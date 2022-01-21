import { LoadController } from '../controllers/LoadController';
import { FooFakeRepository } from '../../fake';
import { LoadUseCase } from '../../../application/usecases/LoadUseCase';
import { AddUseCase } from '../../../application/usecases/AddUseCase';
import { AddController } from '../controllers/AddController';
import { IController } from '../../../../shared/contracts/IController';
import { IAddUseCase } from '../../../application/usecases/interfaces/IAddUseCase';
import { ILoadUseCase } from '../../../application/usecases/interfaces/ILoadUseCase';

const repository = new FooFakeRepository();

const makeLoadController = (): IController => {
  const useCase: ILoadUseCase = new LoadUseCase(repository);
  return new LoadController(useCase);
};

const makeAddController = (): IController => {
  const useCase: IAddUseCase = new AddUseCase(repository);
  return new AddController(useCase);
};

const factories = {
  makeLoadController,
  makeAddController,
};

export default factories;
