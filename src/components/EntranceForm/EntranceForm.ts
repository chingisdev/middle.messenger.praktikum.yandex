import Button from '../Button';
import Block from '../../utils/Components/Block';
import List from '../List';
import template from './template.hbs';

export interface IEntranceForm {
  fields: List,
  submit: Button,
  redirect?: Button,
  events?: Record<string, (event) => void>,
}

export class EntranceForm extends Block<IEntranceForm> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
