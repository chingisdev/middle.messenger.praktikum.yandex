import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface ISearch {
  searchClass: string,
  events?: Record<string, (event) => void>
}

export default class Search extends Block<ISearch> {
  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
