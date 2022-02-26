import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {IButton} from "../../utils/constants/interfaces";

export default class Button extends Block {
  constructor(props: IButton) {
    super(props);
  }
  render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
