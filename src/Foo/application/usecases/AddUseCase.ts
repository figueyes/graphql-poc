import {IAddUseCase} from "./interfaces/IAddUseCase";
import {Foo} from "../../domain/entities/Foo";
import {IFooRepository} from "../../domain/repositories/IFooRepository";
import {ErrorUseCase} from "../../domain/errors";

export class AddUseCase implements IAddUseCase {
  private repository: IFooRepository;

  constructor(repository: IFooRepository) {
    this.repository = repository;
  }

  add = async (entity: Foo): Promise<Foo> => {
    try {
      return await this.repository.add(entity);
    } catch (e) {
      throw new ErrorUseCase();
    }
  }

}
