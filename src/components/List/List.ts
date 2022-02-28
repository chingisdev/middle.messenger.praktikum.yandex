import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Iterable from '../Iterable/Iterable';

export interface IList {
  class: string,
  list: Iterable,
}

export default class List extends Block<IList> {
  constructor(props: IList) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
