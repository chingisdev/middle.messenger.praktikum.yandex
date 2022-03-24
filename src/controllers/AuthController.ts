import AuthAPI, { ISignInData, ISignUpData } from '../api/AuthAPI';
import store from '../utils/Components/Store';
import { router } from '../utils/Components/Router';
import { IBadRequest } from './UsersController';

type TResponse = IBadRequest | {id: number}

export interface ControllerSignUpData extends ISignUpData {
  confirm: string;
}

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI('/auth');
  }

  async signUp(data: ControllerSignUpData) {
    if (data.confirm !== data.password) {
      throw new Error('Passwords must be equal');
    }
    delete data.confirm;
    const response: TResponse = await this.api.signUp(data) as TResponse;

    if ('reason' in response && response.reason) {
      throw new Error(response.reason);
    }

    await this.fetchUser();
    //todo: redirect to chats
    router.go('/profile');
  }

  async signIn(data: ISignInData) {
    await this.api.signIn(data);
    await this.fetchUser();
    //todo: redirect to chats
    router.go('/profile');
  }

  async signOut() {
    await this.api.signOut();
    router.go('/');
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('currentUser', user);
  }
}

export default new AuthController();
