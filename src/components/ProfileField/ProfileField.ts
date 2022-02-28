import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IProfileField {
  name: string,
  content: string,
}

export default class ProfileField extends Block<IProfileField> {
  constructor(props: IProfileField) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
