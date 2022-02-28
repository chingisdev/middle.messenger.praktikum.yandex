import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IInput {
  name: string,
  type: string,
  minLength: string,
  events?: Record<string, (event) => void>
}

export default class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
