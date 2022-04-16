import BaseAPI from './BaseAPI';

export interface IChatName {
  title: string;
}

export class ChatAPI extends BaseAPI {
    constructor(endpoint: string) {
      super(endpoint);
    }

    public create(data: IChatName): Promise<unknown> {
        // throw new Error('Method not implemented.');
      return this.http.post('', data);
    }

    public read(): Promise<unknown> {
        return this.http.get('');
    }

    public update?(identifier: string, data: unknown): Promise<unknown> {
        throw new Error('Method not implemented.');
    }
    public delete?(identifier: string): Promise<unknown> {
        throw new Error('Method not implemented.');
    }

}
