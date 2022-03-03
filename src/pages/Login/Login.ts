import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import List from '../../components/List/List';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import {
  createPatternValidator, saveGlobalForm,
  validateOnSubmit,
  validation,
  initFormFields,
} from '../../utils/Components/Validation';
import Input from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import InputField, { IInputField } from '../../components/InputField/InputField';

export default class Login extends Block<{}> {
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
        validateOnSubmit('chat', validator);
      },
    },
  };
}

const inputSelector = 'login__input';

const emailInput: Input = new Input({
  class: inputSelector,
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

const validator = createPatternValidator();

const passwordInput: Input = new Input({
  class: inputSelector,
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
    }
  },
});

const partialClass = 'login__field-box';

const commonInputProps: IInputField = {
  errorClass: 'login__input-error',
  labelClass: 'login__field-label',
  partialClass
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


