import { Request, RequestHandler, Response } from 'express';
import { IController } from '../../../contracts/IController';

export const run =
  (controller: IController): RequestHandler => async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };
    const httpResponse = await controller.handle(request);
    if (httpResponse.codeStatus >= 200 && httpResponse.codeStatus <= 299) {
      res.status(httpResponse.codeStatus).json(httpResponse.data);
    } else {
      res
        .status(httpResponse.codeStatus)
        .json({ error: httpResponse.data.message });
    }
  };
