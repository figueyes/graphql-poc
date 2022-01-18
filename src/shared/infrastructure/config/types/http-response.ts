export type HttpResponse<T = any> = {
  codeStatus: number;
  data: T;
};

export const serverError = (error: Error): HttpResponse => ({
  codeStatus: 500,
  data: error.stack,
});

export const ok = (data: any): HttpResponse => ({
  codeStatus: 200,
  data,
});

export const noContent = (): HttpResponse => ({
  codeStatus: 204,
  data: null,
});

export const badRequest = (error: Error): HttpResponse => ({
  codeStatus: 400,
  data: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  codeStatus: 403,
  data: error,
});

export const unauthorized = (): HttpResponse => ({
  codeStatus: 401,
  data: new Error('UnauthorizedError'),
});
