import {
  ErrorPageMessage,
  IErrorPageMessage
} from '../../components/ErrorPageMessage/ErrorPageMessage';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';
import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../../components/Button';

export const serverErrorMessage: IErrorPageMessage = {
  code: '500',
  message: 'Ooops, we are working on it. Don\'t be confused',
};

export class ServerError extends Block<{}> {
  initChildren() {
    this.children.info = new ErrorPageMessage(serverErrorMessage);
    this.children.button = new Button(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}
