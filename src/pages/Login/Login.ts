import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import List from '../../components/List/List';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import Input from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import InputField, { IInputField } from '../../components/InputField/InputField';

export default class Login extends Block<{}> {
  protected initChildren() {
    const prop = createLoginProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

export const loginRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Register',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('register'),
  },
};

function createLoginProp(): IEntranceForm {
  return {
    fields: new List({
      listClass: 'login__field-box',
      blockClass: 'login__block',
      list: [new InputField(emailField), new InputField(passwordField)]
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Sign in'
    }),
    redirect: new Button(loginRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logUserInput('chat');
      },
    },
  };
}


const emailInput: Input = new Input({
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
    },
  },
});

const passwordInput: Input = new Input({
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
    }
  },
});

const commonInputProps: IInputField = {
  errorClass: "login__input-error",
  labelClass: "login__field-label",
  partialClass: "login__field-box",
}

const passwordField: IInputField = {
  ...commonInputProps,
  title: 'Password',
  name: 'password',
  input: passwordInput,
};

const emailField: IInputField = {
  ...commonInputProps,
  title: 'Email',
  name: 'email',
  input: emailInput,
};


