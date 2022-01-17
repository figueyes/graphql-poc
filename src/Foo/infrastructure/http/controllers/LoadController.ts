import { IBaseController } from "../../../../shared/infrastructure/http/controllers/IBaseController";
import { HttpResponse, ok, serverError } from "../../../../shared/infrastructure/http/types/http-response";
import { Foo } from "../../../domain/entities/Foo";
import { ILoadUseCase } from "../../../application/usecases/interfaces/ILoadUseCase";
import {Request} from "express";

export class LoadController implements IBaseController {

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
  }
}
