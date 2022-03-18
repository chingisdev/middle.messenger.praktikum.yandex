import template from './template.hbs';
import Block from '../../utils/Components/Block';

export interface IDate {
  date: string,
}

export class ChatDate extends Block<IDate> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
