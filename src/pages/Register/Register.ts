import Block from '../../utils/Components/Block';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import List from '../../components/List/List';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import Input, { IInput } from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import InputBox, { IInputBox } from '../../components/InputBox/InputBox';

export default class Register extends Block<{}> {
  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}

const inputEmailAttr: IInput = {
  class: 'login__input',
  type: 'email',
  minLength: '5',
  name: 'email',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    }
  },
};

const inputLoginAttr: IInput = {
  class: 'login__input',
  type: 'text',
  minLength: '3',
  name: 'login',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
  },
};

const inputPassAttr: IInput = {
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'password', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'password', validator);
    },
  },
};

const inputConfirmPassAttr: IInput = {
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'confirm_password',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'confirm', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'confirm', validator);
    },
  },
};

const inputFirstNameAttr: IInput = {
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'first_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
};

const inputSecondNameAttr: IInput = {
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'second_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
};

const inputPhoneAttr: IInput = {
  class: 'login__input',
  type: 'text',
  minLength: '10',
  name: 'phone',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
  },
};

export const registerRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Sign in',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('login'),
  },
};

function createRegisterProp(): IEntranceForm {
  return {
    fields: new List({
      blockClass: 'login__block',
      list: [
        new InputBox(emailAttr),
        new InputBox(loginAttr),
        new InputBox(firstNameAttr),
        new InputBox(secondNameAttr),
        new InputBox(phoneAttr),
        new InputBox(passwordAttr),
        new InputBox(confirmPasswordAttr)
      ]
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Register'
    }),
    redirect: new Button(registerRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logUserInput('chat');
      },
    },
  };
}

const partialClass = "login__field-box";
const labelClass = "login__field-label";
const errorClass = 'login__input-error';

const baseInputProps = { partialClass, labelClass, errorClass };

const loginAttr: IInputBox = {
  ...baseInputProps,
  title: 'Login',
  name: 'login',
  input: new Input(inputLoginAttr),
};
const passwordAttr: IInputBox = {
  ...baseInputProps,
  title: 'Password',
  name: 'password',
  input: new Input(inputPassAttr),
};
const firstNameAttr: IInputBox = {
  ...baseInputProps,
  title: 'First Name',
  name: 'first_name',
  input: new Input(inputFirstNameAttr),
};
const secondNameAttr: IInputBox = {
  ...baseInputProps,
  title: 'Second Name',
  name: 'second_name',
  input: new Input(inputSecondNameAttr),
};
const phoneAttr: IInputBox = {
  ...baseInputProps,
  title: 'Phone',
  name: 'phone',
  input: new Input(inputPhoneAttr),
};
const emailAttr: IInputBox = {
  ...baseInputProps,
  title: 'Email',
  name: 'email',
  input: new Input(inputEmailAttr),
};
const confirmPasswordAttr: IInputBox = {
  ...baseInputProps,
  title: 'Confirm Password',
  name: 'password',
  input: new Input(inputConfirmPassAttr),
};
