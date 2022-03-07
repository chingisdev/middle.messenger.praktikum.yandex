import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IProfileName {
  name: string;
}

export default class ProfileName extends Block<IProfileName> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
