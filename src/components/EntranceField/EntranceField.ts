import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {IEntranceField} from "../../utils/constants/interfaces";

export default class EntranceField extends Block {
  constructor(props: IEntranceField) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
