import { IController } from '../../../../shared/contracts/IController';
import {
  HttpResponse,
  ok,
  serverError,
} from '../../../../shared/infrastructure/http/http-response';
import { Foo } from '../../../domain/entities/Foo';
import { ILoadUseCase } from '../../../application/usecases/interfaces/ILoadUseCase';

export class LoadController implements IController {
  private useCase: ILoadUseCase;

  constructor(useCase: ILoadUseCase) {
    this.useCase = useCase;
  }

  handle = async (): Promise<HttpResponse<Foo[]>> => {
    try {
      const response = await this.useCase.load();
      return ok(response);
    } catch (e) {
      return serverError(e as Error);
    }
  };
}
