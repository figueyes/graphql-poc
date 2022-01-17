import {IBaseController} from "../controllers/IBaseController";

export const resolve = async (
  controller: IBaseController,
  args?: any,
  ): Promise<any> => {
  const request = {
    ...(args || {})
  }
  const httpResponse = await controller.handle(request);
  return httpResponse.data
}
