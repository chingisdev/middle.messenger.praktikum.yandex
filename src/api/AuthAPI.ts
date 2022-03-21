import BaseAPI from './BaseAPI';

export interface ISignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISignInData {
  login: string;
  password: string;
}

export default class AuthAPI extends BaseAPI {

  constructor(endpoint: string) {
    super(endpoint);
  }

  public signUp(data: ISignUpData): Promise<unknown> {
    return this.http.post('/signup', data);
  }

  public signIn(data: ISignInData): Promise<unknown> {
    return this.http.post('/signin', data);
  }

  public signOut(): Promise<unknown> {
    return this.http.post('/logout', null);
  }

  public read(): Promise<unknown> {
    return this.http.get('/user');
  }

  public create?(identifier: string): Promise<unknown> {
    throw new Error('Method \'read\' not implemented.');
  }

  public update?(identifier: string, data: unknown): Promise<unknown> {
    throw new Error('Method \'update\' not implemented.');
  }

  public delete?(identifier: string): Promise<unknown> {
    throw new Error('Method \'delete\' not implemented.');
  }

}
