import Block from '../../utils/Components/Block';
import template from './template.hbs';
import EntranceForm from '../../components/EntranceForm/EntranceForm';
import { createLoginProp } from '../../utils/fakeGenerators';

export default class Login extends Block {
  protected initChildren() {
    const prop = createLoginProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}
