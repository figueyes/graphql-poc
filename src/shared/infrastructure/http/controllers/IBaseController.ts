import { HttpResponse } from '../../config/types/http-response';

export interface IBaseController<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
