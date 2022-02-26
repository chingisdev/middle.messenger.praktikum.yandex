import Block from '../../utils/Components/Block';
import template from './template.hbs';
import {IForm} from "../../utils/constants/interfaces";

export default class EntranceForm extends Block {
  constructor(props: IForm) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
