import {IAddUseCase} from "./interfaces/IAddUseCase";
import {Foo} from "../../domain/entities/Foo";
import {IFooRepository} from "../../domain/repositories/IFooRepository";

export class AddUseCase implements IAddUseCase {
  private repository: IFooRepository;

  constructor(repository: IFooRepository) {
    this.repository = repository;
  }

  add = async (entity: Foo): Promise<Foo> => {
    return await this.repository.add(entity);
  }

}
