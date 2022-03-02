import Block from '../../utils/Components/Block';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import List from '../../components/List/List';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import Input from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import InputField, { IInputField } from '../../components/InputField/InputField';

export default class Register extends Block<{}> {
  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}

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
        new InputField(confirmPassField)
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
    }
  },
});

const loginInput: Input = new Input({
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
    },
  },
});

const confirmPassInput: Input = new Input({
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
});

const firstNameInput: Input = new Input({
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
});

const secondNameInput: Input = new Input({
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
});

const phoneInput: Input = new Input({
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
});

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

const commonInputProps: IInputField = {
  errorClass: "login__input-error",
  labelClass: "login__field-label",
  partialClass: "login__field-box",
}

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
