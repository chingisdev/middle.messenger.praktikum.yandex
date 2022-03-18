import Block from '../../utils/Components/Block';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
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
import { router } from '../../utils/Components/Router';

const validator = createPatternValidator();

const partialClass = 'login__field-box';

const commonInputProps: IInputField = {
  errorClass: 'login__input-error',
  labelClass: 'login__field-label',
  partialClass,
};

const emailInput: Input = new Input({
  class: 'login__input',
  type: 'email',
  minLength: '5',
  name: 'email',
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

const loginInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '3',
  name: 'login',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'login', validator);
      saveGlobalForm('login', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'login', validator);
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

const confirmPassInput: Input = new Input({
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'confirm',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'confirm', validator);
      saveGlobalForm('confirm', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'confirm', validator);
    },
  },
});

const firstNameInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'first_name',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
      saveGlobalForm('first_name', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
    },
  },
});

const secondNameInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'second_name',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
      saveGlobalForm('second_name', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
    },
  },
});

const phoneInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '10',
  name: 'phone',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'phone', validator);
      saveGlobalForm('phone', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'phone', validator);
    },
  },
});

export const registerRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Sign in',
  divVisible: 'hidden',
  events: {
    click: () => {
      window.entranceForm = {};
      // pseudoRouter('login');
      router.go('/signin');
    },
  },
};

const loginField: IInputField = {
  ...commonInputProps,
  title: 'Login',
  name: 'login',
  input: loginInput,
};

const passwordField: IInputField = {
  ...commonInputProps,
  title: 'Password',
  name: 'password',
  input: passwordInput,
};

const firstNameField: IInputField = {
  ...commonInputProps,
  title: 'First Name',
  name: 'first_name',
  input: firstNameInput,
};

const secondNameField: IInputField = {
  ...commonInputProps,
  title: 'Second Name',
  name: 'second_name',
  input: secondNameInput,
};

const phoneField: IInputField = {
  ...commonInputProps,
  title: 'Phone',
  name: 'phone',
  input: phoneInput,
};

const emailField: IInputField = {
  ...commonInputProps,
  title: 'Email',
  name: 'email',
  input: emailInput,
};

const confirmPassField: IInputField = {
  ...commonInputProps,
  title: 'Confirm Password',
  name: 'password',
  input: confirmPassInput,
};

function createRegisterProp(): IEntranceForm {
  return {
    fields: new List({
      blockClass: 'login__block',
      list: [
        new InputField(emailField),
        new InputField(loginField),
        new InputField(firstNameField),
        new InputField(secondNameField),
        new InputField(phoneField),
        new InputField(passwordField),
        new InputField(confirmPassField),
      ],
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Register',
    }),
    redirect: new Button(registerRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        validateOnSubmit('chat', validator);
      },
    },
  };
}

export default class Register extends Block<{}> {
  constructor() {
    super();
    initFormFields(['password', 'email', 'login', 'confirm',
      'first_name', 'second_name', 'phone']);
  }

  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
