import { EntranceForm, IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import {
  createPatternValidator,
  initFormFields, saveGlobalForm,
  validateOnSubmit, validation
} from '../../utils/Components/Validation';
import InputField from '../../components/InputField';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { router } from '../../utils/Components/Router';
import Input from '../../components/Input';
import { IInputField } from '../../components/InputField/InputField';
import Button from '../../components/Button';
import { IButton } from '../../components/Button/Button';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';

const partialClass = 'login__field-box';
const validator = createPatternValidator();

export const loginRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Register',
  divVisible: 'hidden',
  events: {
    click: () => {
      window.entranceForm = {};
      // pseudoRouter('register');
      router.go('/signup');
    },
  },
};

const emailInput: Input = new Input({
  class: 'login__input',
  type: 'email',
  minLength: '5',
  name: 'email',
  required: 'required',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'email', validator);
      saveGlobalForm('email', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'email', validator);
    },
  },
});

const passwordInput: Input = new Input({
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  required: 'required',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
      saveGlobalForm('password', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
    },
  },
});

const commonInputProps: IInputField = {
  errorClass: 'login__input-error',
  labelClass: 'login__field-label',
  partialClass,
};

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

function createLoginProp(): IEntranceForm {
  return {
    fields: new List({
      listClass: 'login__field-box',
      blockClass: 'login__block',
      list: [new InputField(emailField), new InputField(passwordField)],
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Sign in',
    }),
    redirect: new Button(loginRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        validateOnSubmit('chat', validator);
      },
    },
  };
}

export class Login extends Block<{}> {
  constructor() {
    super();
    initFormFields(['password', 'email']);
  }

  protected initChildren() {
    const prop = createLoginProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
