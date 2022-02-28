import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IDate {
  date: string,
}

export default class ChatDate extends Block {
  constructor(props: IDate) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
