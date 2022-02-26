import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {IProfileField} from "../../utils/constants/interfaces";

export default class ProfileField extends Block {
  constructor(props: IProfileField) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
