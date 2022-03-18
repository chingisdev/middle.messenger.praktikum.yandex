import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button from '../Button';

export interface IHeader {
  name: string,
  button: Button,
}

export class Header extends Block<IHeader> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
