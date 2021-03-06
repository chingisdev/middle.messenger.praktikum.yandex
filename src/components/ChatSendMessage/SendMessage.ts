import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button/Button';

export interface ISendMessage {
  attach: Button,
  send: Button,
}

export default class SendMessage extends Block<ISendMessage> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
