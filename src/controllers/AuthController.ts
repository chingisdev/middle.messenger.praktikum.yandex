import AuthAPI, { ISignInData, ISignUpData } from '../api/AuthAPI';

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
  }

  async signIn(data: ISignInData) {
    await this.api.signIn(data);
  }

  async signOut() {
    const response = await this.api.signOut();
    if (response.status !== 200) {
      throw new Error('Can not logout');
    }
  }
}

export default new AuthController();
