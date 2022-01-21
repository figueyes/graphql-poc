export interface IGet {
  get<T>(url: string, token: string, type: string): Promise<T>;
}

export interface IPost {
  post<T, V>(url: string, body: T, token: string, type: string): Promise<V>;
}

export interface IPut {
  put<T, V>(
    url: string,
    body: T,
    token: string,
    type: string
  ): Promise<V>;
}

export interface IDelete {
  delete<T>(url: string, config?: Record<string, unknown>): Promise<T>;
}
