import Block from '../../utils/Components/Block';
import EntranceForm from '../../components/EntranceForm/EntranceForm';
import template from './template.hbs';
import { createRegisterProp } from '../../utils/fakeGenerators';

export default class Register extends Block {
  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
