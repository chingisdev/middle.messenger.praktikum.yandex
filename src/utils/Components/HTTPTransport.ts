import { HttpMethods } from '../constants/environment';

type TOptions = {
    method: HttpMethods,
    data?: any,
    headers?: Record<string, string>,
}

// TODO: побаловаться с редьюсом.
function queryStringify(data): string {
  let result;
  if (data) {
    result = '?';
  } else {
    return '';
  }
  Object.entries(data).forEach(([key, value]) => {
    result = `${result}${key}=${value.toString()}&`;
  });
  result = result.slice(0, result.length - 1);
  return result;
}

export class HTTPTransport {
  get<IResponse>(url: string, options: any): Promise<IResponse> {
    const data = options.data ? queryStringify(options.data) : null;
    return this.request(
      url,
      { ...options, method: HttpMethods.GET, data },
      options.timeout,
    );
  }

  put<IResponse>(url: string, options: any): Promise<IResponse> {
    return this.request(
      url,
      { ...options, method: HttpMethods.PUT },
      options.timeout,
    );
  }

  post<IResponse>(url: string, options: any): Promise<IResponse> {
    return this.request(
      url,
      { ...options, method: HttpMethods.POST },
      options.timeout,
    );
  }

  delete<IResponse>(url: string, options: any): Promise<IResponse> {
    return this.request(
      url,
      { ...options, method: HttpMethods.DELETE },
      options.timeout,
    );
  }

  request<IResponse>(url: string, options: TOptions, timeout): Promise<IResponse> {
    const { data, headers, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === HttpMethods.GET) {
        url = url.concat(data);
      }

      xhr.open(method, url);
      xhr.timeout = timeout;
      xhr.withCredentials = true;
      xhr.setRequestHeader('Content-Type', 'text/plain');

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      } else {
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      }

      if (method === HttpMethods.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }

      xhr.onload = () => {
        resolve(xhr.response);
      };
      xhr.onabort = () => reject(xhr.statusText);
      xhr.onerror = () => reject(xhr.statusText);
      xhr.ontimeout = () => reject(xhr.statusText);
    });
  }
}
