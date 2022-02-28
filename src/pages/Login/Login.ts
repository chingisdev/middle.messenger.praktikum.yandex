import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm, { IForm } from '../../components/EntranceForm/EntranceForm';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import EntranceField, { IEntranceField } from '../../components/EntranceField/EntranceField';
import Button from '../../components/Button/Button';
import { loginRedirectBtn, submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logFormUserInput, validation, validator } from '../../utils/Components/Validation';
import Input, { IInput } from '../../components/Input/Input';
import { inputEmailAttr, inputPassAttr } from '../../utils/constants/inputFieldAttr';



export default class Login extends Block {
  protected initChildren() {
    const prop = createLoginProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

function createLoginProp(): IForm {
  return {
    fields: new List({
      class: 'login__block',
      list: new Iterable({
        email: new EntranceField(emailAttr),
        password: new EntranceField(passwordAttr),
      }),
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Sign in'
    }),
    redirect: new Button(loginRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logFormUserInput('chat');
      },
    },
  };
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


