import { Router } from 'express';
import { run } from "../../../http/adapters/rest";
import factories from "../../../../../Foo/infrastructure/http/factories";
import { makeVersionHealth } from '../../../../../version';

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public routes(): Router {
    this.router.get('/version', run(makeVersionHealth()));
    this.router.get('/foo', run(factories.makeLoadController()));
    this.router.post('/foo', run(factories.makeAddController()));
    return this.router;
  }
}
