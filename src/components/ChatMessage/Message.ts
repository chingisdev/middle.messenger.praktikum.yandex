import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IMessage {
  positionClass: string,
  backgroundClass: string,
  date: string,
  message: string,
}

export default class Message extends Block {
  constructor(props: IMessage) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
