import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IProfileName {
  name: string;
}

export class ProfileName extends Block<IProfileName> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
