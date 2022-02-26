import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {IInput} from "../../utils/constants/interfaces";

export default class Input extends Block {
  constructor(props: IInput) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
