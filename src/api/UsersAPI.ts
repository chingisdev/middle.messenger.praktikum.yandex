import BaseAPI from './BaseAPI';
import { IProfile } from './AuthAPI';

export interface IUpdateProfile extends IProfile {
  display_name: string;
}

export interface IUpdatePass {
  oldPassword: string,
  newPassword: string,
}

export default class UsersAPI extends BaseAPI {
  constructor(endpoint: string) {
    super(endpoint);
  }

  public updateProfile(data: IUpdateProfile): Promise<unknown> {
    return this.http.put('/profile', data);
  }

  public updatePassword(data: IUpdatePass): Promise<unknown> {
    return this.http.put('/password', data);
  }

  public create?(data: unknown): Promise<unknown> {
      throw new Error('Method not implemented.');
  }

  public read?(identifier: string): Promise<unknown> {
      throw new Error('Method not implemented.');
  }

  public update?(identifier: string, data: unknown): Promise<unknown> {
      throw new Error('Method not implemented.');
  }

  public delete?(identifier: string): Promise<unknown> {
      throw new Error('Method not implemented.');
  }
}
