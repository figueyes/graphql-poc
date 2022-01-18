import { HttpResponse } from '../http-response';

export interface IBaseController<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
