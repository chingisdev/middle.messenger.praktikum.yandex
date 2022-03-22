import AuthAPI, { ISignInData, ISignUpData } from '../api/AuthAPI';
import store from '../utils/Components/Store';
import { router } from '../utils/Components/Router';

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
    const response = await this.api.signUp(data);

    if (response.reason) {
      throw new Error(response.reason);
    }

    await this.fetchUser();
    // router.go('/profile');
  }

  async signIn(data: ISignInData) {
    await this.api.signIn(data);
    this.fetchUser();
  }

  async signOut() {
    const response = await this.api.signOut();
    if (response.status !== 200) {
      throw new Error('Can not logout');
    }
    // router.go('/');
  }

  async fetchUser() {
    const user = await this.api.read();
    store.set('currentUser', user);
  }
}

export default new AuthController();
