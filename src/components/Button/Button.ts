import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IButton {
  name?: string,
  textClass?: string,
  textVisible?: string,
  buttonClass?: string,
  type?: string,
  arrowClass?: string,
  divVisible?: string,
  events?: Record<string, (event) => void>,
}

export default class Button extends Block<IButton> {
  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
