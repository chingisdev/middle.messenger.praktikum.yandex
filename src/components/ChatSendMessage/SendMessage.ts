import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {ISendMessage} from "../../utils/constants/interfaces";

export default class SendMessage extends Block {
  constructor(props: ISendMessage) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
