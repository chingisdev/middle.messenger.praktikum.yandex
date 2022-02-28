import Block from '../../utils/Components/Block';
import template from './template.hbs';
import List from '../List/List';
import Button from '../Button/Button';

export interface IEntranceForm {
  fields: List,
  submit: Button,
  redirect: Button,
  events?: Record<string, (event) => void>,
}

export default class EntranceForm extends Block<IEntranceForm> {
  constructor(props: IEntranceForm) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
