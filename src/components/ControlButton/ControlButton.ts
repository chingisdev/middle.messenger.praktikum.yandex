import Block from '../../utils/Components/Block';
import template from './template.hbs';

interface IControlButton {
  action: string,
  text: string,
  events?: Record<string, any>,
}

export class ControlButton extends Block<IControlButton> {
  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
