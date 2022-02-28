import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button from '../Button/Button';

export interface IHeader {
  name: string,
  button: Button,
}

export default class Header extends Block {
  constructor(props: IHeader) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
