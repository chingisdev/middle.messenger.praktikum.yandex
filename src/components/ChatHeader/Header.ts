import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {IHeader} from "../../utils/constants/interfaces";

export default class Header extends Block {
  constructor(props: IHeader) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
