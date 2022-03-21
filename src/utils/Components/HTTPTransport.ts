import { HttpMethods } from '../constants/environment';
import queryStringify from '../utilFunctions/queryStringify';

type TOptions = {
    method: HttpMethods,
    data?: any,
    headers?: Record<string, string>,
}

export class HTTPTransport {
  static API_URL: string = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }


  get<IResponse>(path: string = '/', data: any): Promise<IResponse> {
    const query = data ? queryStringify(data) : null;
    return this.request(this.endpoint + path + query);
  }

  put<IResponse>(path: string, data: any): Promise<IResponse> {
    return this.request(
      this.endpoint + path,
      {
        method: HttpMethods.PUT,
        data
      }
    );
  }

  post<IResponse>(path: string, data: any): Promise<IResponse> {
    return this.request(
      this.endpoint + path,
      {
        method: HttpMethods.POST,
        data
      },
    );
  }

  delete<IResponse>(path: string, data: any): Promise<IResponse> {
    return this.request(
      this.endpoint + path,
      {
        method: HttpMethods.DELETE,
        data
      },
    );
  }

  request<IResponse>(url: string, options: TOptions = { method: HttpMethods.GET }): Promise<IResponse> {
    const { data, headers, method } = options;
    // const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onreadystatechange = (e) => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      }
      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onabort = () => reject(xhr.statusText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.ontimeout = () => reject(xhr.statusText);


      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      } else {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      }

      xhr.withCredentials = true;

      if (method === HttpMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}
