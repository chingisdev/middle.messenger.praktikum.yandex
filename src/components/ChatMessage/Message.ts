import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IMessage {
  positionClass: string,
  backgroundClass: string,
  date: string,
  message: string,
}

export class Message extends Block<IMessage> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
