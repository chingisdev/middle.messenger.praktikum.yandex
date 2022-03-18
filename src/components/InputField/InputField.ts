import Input from '../Input';
import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IInputField {
  partialClass?: string,
  containerClass?: string,
  labelClass?: string,
  errorClass?: string,
  name?: string,
  title?: string,
  input?: Input
}

export class InputField extends Block<IInputField> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
