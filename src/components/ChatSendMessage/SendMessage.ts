import Button from '../Button';
import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface ISendMessage {
  attach: Button,
  send: Button,
}

export class SendMessage extends Block<ISendMessage> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
