import { IController } from '../../../contracts/IController';

export const resolve = async (
  controller: IController,
  args?: any,
): Promise<any> => {
  const request = { ...(args || {}) };
  const httpResponse = await controller.handle(request);
  return httpResponse.data;
};
