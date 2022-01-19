export interface IApiClient {
  // get<T>(url: string, token: string, type: string): Promise<unknown>;
  post<T, V>(url: string, body: T, token: string, type: string): Promise<any>;
  // put<T, V>(
  //   url: string,
  //   body: T,
  //   token: string,
  //   type: string
  // ): Promise<unknown>;
  // delete<T>(url: string, config?: Record<string, unknown>): Promise<T>;
}
