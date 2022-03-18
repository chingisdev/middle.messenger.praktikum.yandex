import Button from '../Button';
import Block from '../../utils/Components/Block';
import List from '../List';
import template from './template.hbs';

export interface IProfileForm {
  fields: List,
  submit: Button,
  events?: Record<string, (event) => void>,
}

export class ProfileForm extends Block<IProfileForm> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
