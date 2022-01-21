import { IController } from '../../../../shared/contracts/IController';
import {
  HttpResponse,
  ok,
  serverError,
} from '../../../../shared/infrastructure/http/http-response';
import { Foo } from '../../../domain/entities/Foo';
import { IAddUseCase } from '../../../application/usecases/interfaces/IAddUseCase';

export class AddController implements IController {
  private useCase: IAddUseCase;

  constructor(useCase: IAddUseCase) {
    this.useCase = useCase;
  }

  handle = async (
    req: AddControllerNamespace.Request,
  ): Promise<HttpResponse<Foo>> => {
    const { data } = req;
    try {
      const response = await this.useCase.add(data);
      return ok(response);
    } catch (e) {
      return serverError(e as Error);
    }
  };
}

export namespace AddControllerNamespace {
  export type Request = {
    data: Foo;
  };
}
