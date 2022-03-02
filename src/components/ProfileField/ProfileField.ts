import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Input from '../Input/Input';

export interface IProfileField {
  partialClass?: string,
  containerClass?: string,
  labelClass?: string,
  errorClass?: string,
  name: string,
  title: string,
  input: Input
}

export default class ProfileField extends Block<IProfileField> {
  constructor(props: IProfileField) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
