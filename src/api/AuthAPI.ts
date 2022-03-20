import BaseAPI from './BaseAPI';

export default class AuthAPI extends BaseAPI {
    public create?(data: unknown): Promise<unknown> {
        throw new Error('Method \'create\' not implemented.');
    }
    public read?(identifier: string): Promise<unknown> {
        throw new Error('Method \'read\' not implemented.');
    }
    public update?(identifier: string, data: unknown): Promise<unknown> {
        throw new Error('Method \'update\' not implemented.');
    }
    public delete?(identifier: string): Promise<unknown> {
        throw new Error('Method \'delete\' not implemented.');
    }

}
