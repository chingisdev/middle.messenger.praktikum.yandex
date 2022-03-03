import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button, { IButton } from '../../components/Button/Button';
import ProfileName, { IProfileName } from '../../components/ProfileName/ProfileName';
import List from '../../components/List/List';
import InputField, { IInputField } from '../../components/InputField/InputField';
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
    blockClass: 'profile__list',
    list: [
      new InputField(emailField),
      new InputField(loginField),
      new InputField(firstNameField),
      new InputField(secondNameField),
      new InputField(displayNameField),
      new InputField(phoneField)
    ]
  });
}

const partialClass = 'profile__part';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
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
    click: () => pseudoRouter('change'),
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
    blockClass: 'profile__list',
    list: [new Button(profileUpdateBtn), new Button(profilePassBtn), new Button(profileExitBtn)]
  });
}

const profileNameAtr: IProfileName = {
  name: 'SomeName',
};


const emailInput: Input = new Input({
  class: "profile__input",
  placeholder: 'pochta@mail.ru',
  disabled: 'disabled',
});

const emailField: IInputField = {
  ...commonInputProps,
  title: 'Email',
  input: emailInput,
};

const loginInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Ivanio',
  disabled: 'disabled',
});

const loginField: IInputField = {
  ...commonInputProps,
  title: 'Login',
  input: loginInput,
};

const firstNameInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Ivan',
  disabled: 'disabled',
});

const firstNameField: IInputField = {
  ...commonInputProps,
  title: 'First Name',
  input: firstNameInput,
};

const secondNameInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Ivanov',
  disabled: 'disabled',
});

const secondNameField: IInputField = {
  ...commonInputProps,
  title: 'Second Name',
  input: secondNameInput,
};

const displayNameInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Iva',
  disabled: 'disabled',
});

const displayNameField: IInputField = {
  ...commonInputProps,
  title: 'Display Name',
  input: displayNameInput,
};

const phoneInput: Input = new Input({
  class: "profile__input",
  placeholder: '+7 (909) 967 30 30',
  disabled: 'disabled',
});

const phoneField: IInputField = {
  ...commonInputProps,
  title: 'Phone',
  input: phoneInput,
};

