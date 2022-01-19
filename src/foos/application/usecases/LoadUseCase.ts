import { ILoadUseCase } from './interfaces/ILoadUseCase';
import { Foo } from '../../domain/entities/Foo';
import { IFooRepository } from '../../domain/repositories/IFooRepository';
import { ErrorUseCase } from '../../domain/errors';

export class LoadUseCase implements ILoadUseCase {
  private repository: IFooRepository;

  constructor(repository: IFooRepository) {
    this.repository = repository;
  }

  load = async (): Promise<Foo[]> => {
    try {
      return await this.repository.get();
    } catch (e) {
      throw new ErrorUseCase();
    }
  };
}
