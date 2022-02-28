import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm, { IForm } from '../../components/EntranceForm/EntranceForm';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import EntranceField from '../../components/EntranceField/EntranceField';
import { emailAttr, passwordAttr } from '../../utils/constants/markup';
import Button from '../../components/Button/Button';
import { loginRedirectBtn, submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logFormUserInput } from '../../utils/Components/Validation';



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
