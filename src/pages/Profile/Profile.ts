import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button, { IButton } from '../../components/Button/Button';
import ProfileName, { IProfileName } from '../../components/ProfileName/ProfileName';
import List from '../../components/List/List';
import ProfileField, { IProfileField } from '../../components/ProfileField/ProfileField';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import Input from '../../components/Input/Input';

export default class Profile extends Block<{}> {
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
    list: [
      new ProfileField(profileEmail),
      new ProfileField(profileLogin),
      new ProfileField(profileFirstName),
      new ProfileField(profileSecondName),
      new ProfileField(profileDisplayName),
      new ProfileField(profilePhone)
    ]
  });
}

const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    click: () => pseudoRouter('chat'),
  },
};

const profileUpdateBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Update profile',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('update'),
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
    list: [new Button(profileUpdateBtn), new Button(profilePassBtn), new Button(profileExitBtn)]
  });
}

const profileNameAtr: IProfileName = {
  name: 'SomeName',
};

const profileEmail: IProfileField = {
  name: 'Email',
  input: new Input({
    class: "profile__input",
    placeholder: 'pochta@mail.ru',
    disabled: 'disabled',
  })
};

const profileLogin: IProfileField = {
  name: 'Login',
  input: new Input({
    class: "profile__input",
    placeholder: 'Ivanio',
    disabled: 'disabled',
  })
};

const profileFirstName: IProfileField = {
  name: 'First Name',
  input: new Input({
    class: "profile__input",
    placeholder: 'Ivan',
    disabled: 'disabled',
  })
};

const profileSecondName: IProfileField = {
  name: 'Second Name',
  input: new Input({
    class: "profile__input",
    placeholder: 'Ivanov',
    disabled: 'disabled',
  })
};

const profileDisplayName: IProfileField = {
  name: 'Display Name',
  input: new Input({
    class: "profile__input",
    placeholder: 'Iva',
    disabled: 'disabled',
  })
};

const profilePhone: IProfileField = {
  name: 'Phone',
  input: new Input({
    class: "profile__input",
    placeholder: '+7 (909) 967 30 30',
    disabled: 'disabled',
  })
};

