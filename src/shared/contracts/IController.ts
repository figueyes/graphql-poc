import { HttpResponse } from '../infrastructure/http/http-response';

export interface IController<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
