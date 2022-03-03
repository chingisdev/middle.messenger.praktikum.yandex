import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IList {
  blockClass?: string,
  listClass?: string,
  list: Block<any>[],
}

export default class List extends Block<IList> {
  constructor(props: IList) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
