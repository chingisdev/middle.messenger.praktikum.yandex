import Block from '../../utils/Components/Block';
import template from './template.hbs';

export interface IErrorPageMessage {
  code: string,
  message: string,
}

export default class ErrorPageMessage extends Block<{}> {
  render() {
    return this.compile(template, { ...this.props });
  }
}
