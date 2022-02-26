import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {ISearch} from "../../utils/constants/interfaces";

export default class Search extends Block {
  constructor(props: ISearch) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
