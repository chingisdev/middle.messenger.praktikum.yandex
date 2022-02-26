import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {IMessage} from "../../utils/constants/interfaces";

export default class Message extends Block {
  constructor(props: IMessage) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
