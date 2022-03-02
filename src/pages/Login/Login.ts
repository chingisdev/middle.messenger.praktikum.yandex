import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm, { IEntranceForm } from '../../components/EntranceForm/EntranceForm';
import List from '../../components/List/List';
import EntranceField, { IEntranceField } from '../../components/EntranceField/EntranceField';
import Button, { IButton } from '../../components/Button/Button';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import Input, { IInput } from '../../components/Input/Input';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';

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
      class: 'login__block',
      list: [new EntranceField(emailAttr), new EntranceField(passwordAttr)]
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
    }
  },
};

const passwordAttr: IEntranceField = {
  title: 'Password',
  name: 'password',
  input: new Input(inputPassAttr),
};

const emailAttr: IEntranceField = {
  title: 'Email',
  name: 'email',
  input: new Input(inputEmailAttr),
};


