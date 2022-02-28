import Block from '../../utils/Components/Block';
import EntranceForm, { IForm } from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import EntranceField from '../../components/EntranceField/EntranceField';
import {
  confirmPasswordAttr,
  emailAttr,
  firstNameAttr,
  loginAttr,
  passwordAttr,
  phoneAttr,
  secondNameAttr
} from '../../utils/constants/markup';
import Button from '../../components/Button/Button';
import { registerRedirectBtn, submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logFormUserInput } from '../../utils/Components/Validation';

export default class Register extends Block {
  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}

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
