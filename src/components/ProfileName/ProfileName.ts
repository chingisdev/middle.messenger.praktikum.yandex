import template from './template.hbs';
import Block from '../../utils/Components/Block';

export default class ProfileName extends Block {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export interface IName {
  name: string;
}
