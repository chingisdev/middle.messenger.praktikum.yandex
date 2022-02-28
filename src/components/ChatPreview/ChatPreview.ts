import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { IMessage } from '../ChatMessage/Message';

export default class ChatPreview extends Block<IChatPreview> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

interface IChatPreview {
  name: string,
  lastMessage: string,
  lastMessageTime: string,
  unreadQuantity: number | string,
  avatar?: string,
  messages?: IMessage[];
  events?: Record<string, (event) => void>,
}
