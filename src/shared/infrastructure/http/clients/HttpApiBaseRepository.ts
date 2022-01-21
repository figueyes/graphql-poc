import axios, { AxiosResponse } from 'axios';
import { IPost } from '../../../contracts/IApiClient';

export class HttpApiBaseRepository implements IPost {
  post<T, V>(url: string, body: T, token = '', type = ''): Promise<any> {
    let headers: Record<string, string>;
    switch (type) {
      default:
        headers = {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        };
    }

    return axios
      .post(url, body, { headers })
      .then((response: AxiosResponse<V>) => {
        const { status, data } = response;
        if (status === 200) {
          return data;
        }

        return { response, status };
      })
      .catch((error: unknown) => {
        const err = error as Error;
        log.error('error:', err.message);
        throw error;
      });
  }
}
