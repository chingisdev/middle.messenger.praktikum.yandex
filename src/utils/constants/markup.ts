import Input from '../../components/Input/Input';
import {
  inputConfirmPassAttr,
  inputEmailAttr,
  inputFirstNameAttr,
  inputLoginAttr, inputPassAttr,
  inputPhoneAttr,
  inputSecondNameAttr,
} from './inputFieldAttr';
import { IProfileField } from '../../components/ProfileField/ProfileField';
import { IErrorPageMessage } from '../../components/ErrorPageMessage/ErrorPageMessage';
import { IEntranceField } from '../../components/EntranceField/EntranceField';
import { IName } from '../../components/ProfileName/ProfileName';
import { ISearch } from '../../components/ChatSearch/Search';

export const loginAttr: IEntranceField = {
  title: 'Login',
  name: 'login',
  input: new Input(inputLoginAttr),
};

export const passwordAttr: IEntranceField = {
  title: 'Password',
  name: 'password',
  input: new Input(inputPassAttr),
};

export const firstNameAttr: IEntranceField = {
  title: 'First Name',
  name: 'first_name',
  input: new Input(inputFirstNameAttr),
};

export const secondNameAttr: IEntranceField = {
  title: 'Second Name',
  name: 'second_name',
  input: new Input(inputSecondNameAttr),
};

export const phoneAttr: IEntranceField = {
  title: 'Phone',
  name: 'phone',
  input: new Input(inputPhoneAttr),
};

export const emailAttr: IEntranceField = {
  title: 'Email',
  name: 'email',
  input: new Input(inputEmailAttr),
};

export const confirmPasswordAttr: IEntranceField = {
  title: 'Confirm Password',
  name: 'password',
  input: new Input(inputConfirmPassAttr),
};

export const notFoundMessage: IErrorPageMessage = {
  code: '404',
  message: 'Wrong gate',
};

export const serverErrorMessage: IErrorPageMessage = {
  code: '500',
  message: 'Ooops, we are working on it. Don\'t be confused',
};

export const profileNameAtr: IName = {
  name: 'SomeName',
};

export const searchAtr: ISearch = {
  searchClass: 'search-input',
  events: {
    focus: (event) => {
      event.target.placeholder = '';
    },
    blur: (event) => {
      event.target.placeholder = 'search';
    },
  },
};

export const profileEmail: IProfileField = {
  name: 'Email',
  content: 'pochta@mail.ru',
};

export const profileLogin: IProfileField = {
  name: 'Login',
  content: 'IvanIvanov',
};

export const profileFirstName: IProfileField = {
  name: 'First Name',
  content: 'Ivan',
};

export const profileSecondName: IProfileField = {
  name: 'Second Name',
  content: 'Ivanov',
};

export const profileDisplayName: IProfileField = {
  name: 'Display Name',
  content: 'Ivan',
};

export const profilePhone: IProfileField = {
  name: 'Phone',
  content: '+7 (909) 967 30 30',
};
