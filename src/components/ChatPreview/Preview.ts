import Block from '../../utils/Components/Block';
import template from './template.hbs';

export default class Preview extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
