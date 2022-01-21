import { IController } from '../shared/contracts/IController';
import {
  HttpResponse,
  ok,
  serverError,
} from '../shared/infrastructure/http/http-response';
import { name, version, author } from '../../package.json';

export class VersionHealth implements IController {
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

export const makeVersionHealth = (): IController => new VersionHealth();
