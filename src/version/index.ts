import { IBaseController } from '../shared/infrastructure/http/controllers/IBaseController';
import {
  HttpResponse,
  ok,
  serverError,
} from '../shared/infrastructure/http/http-response';
import { name, version, author } from '../../package.json';

export class VersionHealth implements IBaseController {
  handle = async (): Promise<HttpResponse> => {
    try {
      const versionApp = {
        app: name,
        version,
        author,
        env: process.env.ENVIRONMENT_TYPE,
      };
      return ok({ ...versionApp });
    } catch (error) {
      return serverError(error as Error);
    }
  };
}

export const makeVersionHealth = (): IBaseController => new VersionHealth();
