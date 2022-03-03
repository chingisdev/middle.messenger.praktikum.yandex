import template from './template.hbs';
import Block from '../../utils/Components/Block';

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

export default class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
