import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {IList} from "../../utils/constants/interfaces";

export default class List extends Block {
  constructor(props: IList) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
