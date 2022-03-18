import ErrorPageMessage from '../../components/ErrorPageMessage';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';
import Block from '../../utils/Components/Block';
import { IErrorPageMessage } from '../../components/ErrorPageMessage/ErrorPageMessage';
import template from './template.hbs';
import Button from '../../components/Button';

export const notFoundMessage: IErrorPageMessage = {
  code: '404',
  message: 'Wrong gate',
};

export class NotFound extends Block<{}> {
  initChildren() {
    this.children.info = new ErrorPageMessage(notFoundMessage);
    this.children.button = new Button(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}
