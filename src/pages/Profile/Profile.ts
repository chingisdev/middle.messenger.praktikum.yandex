import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button, { IButton } from '../../components/Button/Button';
import ProfileName, { IName } from '../../components/ProfileName/ProfileName';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import ProfileField, { IProfileField } from '../../components/ProfileField/ProfileField';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';

export const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    click: () => pseudoRouter('chat'),
  },
};
export default class Profile extends Block {
  protected initChildren() {
    this.children.button = new Button(backBtnAtr);
    this.children.name = new ProfileName(profileNameAtr);
    this.children.fields = createProfileFields();
    this.children.control = createProfileControlBtn();
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

function createProfileFields() {
  return new List({
    class: 'profile__list',
    list: new Iterable({
      email: new ProfileField(profileEmail),
      login: new ProfileField(profileLogin),
      firstName: new ProfileField(profileFirstName),
      secondName: new ProfileField(profileSecondName),
      displayName: new ProfileField(profileDisplayName),
      phone: new ProfileField(profilePhone),
    }),
  });
}

const profileUpdateBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Update profile',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => console.log('update profile button'),
  },
};

const profilePassBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Change password',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => console.log('change password button'),
  },
};

export const profileExitBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-logout',
  type: 'button',
  name: 'Log out',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('login'),
  },
};

function createProfileControlBtn() {
  return new List({
    class: 'profile__list',
    list: new Iterable({
      updateProfile: new Button(profileUpdateBtn),
      changePassword: new Button(profilePassBtn),
      exit: new Button(profileExitBtn),
    }),
  });
}

const profileNameAtr: IName = {
  name: 'SomeName',
};

const profileEmail: IProfileField = {
  name: 'Email',
  content: 'pochta@mail.ru',
};

const profileLogin: IProfileField = {
  name: 'Login',
  content: 'IvanIvanov',
};

const profileFirstName: IProfileField = {
  name: 'First Name',
  content: 'Ivan',
};

const profileSecondName: IProfileField = {
  name: 'Second Name',
  content: 'Ivanov',
};

const profileDisplayName: IProfileField = {
  name: 'Display Name',
  content: 'Ivan',
};

const profilePhone: IProfileField = {
  name: 'Phone',
  content: '+7 (909) 967 30 30',
};

