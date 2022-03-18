import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IInput {
  class: string,
  name?: string,
  type?: string,
  placeholder?: string,
  minLength?: string,
  disabled?: string,
  required?: string,
  events?: Record<string, (event) => void>
}

export class Input extends Block<IInput> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
