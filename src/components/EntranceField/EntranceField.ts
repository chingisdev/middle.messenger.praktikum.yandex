import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Input, { IInput } from '../Input/Input';

export interface IEntranceField {
  name: string,
  title: string,
  input: Input,
}

export default class EntranceField extends Block<IEntranceField> {
  constructor(props: IEntranceField) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
