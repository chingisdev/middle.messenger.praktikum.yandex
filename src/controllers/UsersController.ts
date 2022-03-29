import UsersAPI, { IUpdatePass, IUpdateProfile } from '../api/UsersAPI';
import store, { IUser } from '../utils/Components/Store';
import { router } from '../utils/Components/Router';
import { freeAllInput } from '../utils/Components/Validation';

export interface IBadRequest {
  reason: string;
}

export interface IPassword extends IUpdatePass {
  confirmPassword: string;
}

type TUserResponse = IBadRequest | IUser;
type TUserPassword = IBadRequest | {};

class UsersController {
  private api: UsersAPI;

  constructor() {
    this.api = new UsersAPI('/user');
  }

  async updateProfile(data: IUpdateProfile) {

    const user: TUserResponse = await this.api.updateProfile(data) as TUserResponse;
    if ('reason' in user && user.reason) {
      throw new Error(user.reason);
    }
    store.set('currentUser', user);
    freeAllInput();
    router.go('/profile');
  }

  async updatePassword(data: IPassword) {
    const currentPass = store.getState().currentPassword;
    if (currentPass && data.oldPassword !== currentPass) {
      throw new Error('Passwords don\'t match');
    }
    if (data.newPassword !== data.confirmPassword) {
      throw new Error('Passwords don\'t match');
    }
    const {confirmPassword, ...fields} = data;
    const answer: TUserPassword = await this.api.updatePassword(fields) as TUserPassword;
    if (answer && 'reason' in answer && answer.reason) {
      throw new Error(answer.reason);
    }
    store.set('currentPassword', data.newPassword);
    freeAllInput();
    router.go('/profile');
  }
}

export default new UsersController();
