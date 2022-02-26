import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {IDate} from "../../utils/constants/interfaces";

export default class ChatDate extends Block {
  constructor(props: IDate) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
