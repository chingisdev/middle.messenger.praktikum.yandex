import UsersAPI, { IUpdateProfile } from '../api/UsersAPI';
import store, { IUser } from '../utils/Components/Store';
import { router } from '../utils/Components/Router';

export interface IBadRequest {
  reason: string
}

type TResponse = IBadRequest | IUser;

class UsersController {
  private api: UsersAPI;

  constructor() {
    this.api = new UsersAPI('/user');
  }

  async updateProfile(data: IUpdateProfile) {

    const user: TResponse = await this.api.updateProfile(data) as TResponse;
    console.log('answeer user', user);

    if ('reason' in user && user.reason) {
      throw new Error(user.reason);
    }
    debugger;
    store.set('currentUser', user);
    router.go('/profile');
  }
}

export default new UsersController();
