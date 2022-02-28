import Block from '../../utils/Components/Block';
import EntranceForm, { IForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import EntranceField, { IEntranceField } from '../../components/EntranceField/EntranceField';
import Button from '../../components/Button/Button';
import { registerRedirectBtn, submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logFormUserInput, validation, validator } from '../../utils/Components/Validation';
import Input, { IInput } from '../../components/Input/Input';

export default class Register extends Block {
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
  minLength: '2',
  name: 'email',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    },
  },
};

const inputLoginAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'login',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
  },
};

const inputPassAttr: IInput = {
  type: 'password',
  minLength: '4',
  name: 'password',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'password', validator);
    },
  },
};

const inputConfirmPassAttr: IInput = {
  type: 'password',
  minLength: '4',
  name: 'confirm_password',
  events: {
    blur: (event) => {
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
  },
};

const inputPhoneAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'phone',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
  },
};

function createRegisterProp(): IForm {
  return {
    fields: new List({
      class: 'login__block',
      list: new Iterable({
        email: new EntranceField(emailAttr),
        login: new EntranceField(loginAttr),
        firstName: new EntranceField(firstNameAttr),
        secondName: new EntranceField(secondNameAttr),
        phone: new EntranceField(phoneAttr),
        password: new EntranceField(passwordAttr),
        confirmPas: new EntranceField(confirmPasswordAttr),
      }),
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Register'
    }),
    redirect: new Button(registerRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logFormUserInput('chat');
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
