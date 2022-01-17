import {LoadController} from "../controllers/LoadController";
import {FooFakeRepository} from "../../fake";
import {LoadUseCase} from "../../../application/usecases/LoadUseCase";
import {AddUseCase} from "../../../application/usecases/AddUseCase";
import {AddController} from "../controllers/AddController";
import {Foo} from "../../../domain/entities/Foo";

const repository = new FooFakeRepository();

const makeLoadController = () => {
  const useCase = new LoadUseCase(repository);
  return new LoadController(useCase);
}

const makeAddController = () => {
  const useCase = new AddUseCase(repository);
  return new AddController(useCase);
}

const factories = {
  makeLoadController,
  makeAddController
}

export default factories;
