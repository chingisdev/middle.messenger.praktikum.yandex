import Block from '../../utils/Components/Block';
import template from './template.hbs';
import List from '../List/List';
import Button from '../Button/Button';

export interface IProfileForm {
  fields: List,
  submit: Button,
  events?: Record<string, (event) => void>,
}

export default class ProfileForm extends Block<IProfileForm> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
