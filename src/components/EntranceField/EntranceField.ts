import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { IInput } from '../Input/Input';

export interface IEntranceField {
  name: string,
  title: string,
  input: IInput,
}

export default class EntranceField extends Block {
  constructor(props: IEntranceField) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
