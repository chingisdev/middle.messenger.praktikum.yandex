import Block from '../../utils/Components/Block';
import template from './template.hbs';

export default class Iterable extends Block<any> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
