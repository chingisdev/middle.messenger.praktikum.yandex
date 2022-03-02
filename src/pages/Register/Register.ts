import Block from '../../utils/Components/Block';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import List from '../../components/List/List';
import EntranceField, { IEntranceField } from '../../components/EntranceField/EntranceField';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import Input, { IInput } from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';

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
      class: 'login__block',
      list: [
        new EntranceField(emailAttr),
        new EntranceField(loginAttr),
        new EntranceField(firstNameAttr),
        new EntranceField(secondNameAttr),
        new EntranceField(phoneAttr),
        new EntranceField(passwordAttr),
        new EntranceField(confirmPasswordAttr)
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


const loginAttr: IEntranceField = {
  title: 'Login',
  name: 'login',
  input: new Input(inputLoginAttr),
};
const passwordAttr: IEntranceField = {
  title: 'Password',
  name: 'password',
  input: new Input(inputPassAttr),
};
const firstNameAttr: IEntranceField = {
  title: 'First Name',
  name: 'first_name',
  input: new Input(inputFirstNameAttr),
};
const secondNameAttr: IEntranceField = {
  title: 'Second Name',
  name: 'second_name',
  input: new Input(inputSecondNameAttr),
};
const phoneAttr: IEntranceField = {
  title: 'Phone',
  name: 'phone',
  input: new Input(inputPhoneAttr),
};
const emailAttr: IEntranceField = {
  title: 'Email',
  name: 'email',
  input: new Input(inputEmailAttr),
};
const confirmPasswordAttr: IEntranceField = {
  title: 'Confirm Password',
  name: 'password',
  input: new Input(inputConfirmPassAttr),
};
