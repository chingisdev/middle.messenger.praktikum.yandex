import Block from '../../utils/Components/Block';
import template from './template.hbs';
import RedirectButton from '../../components/Button/Button';
import ErrorPageMessage, { IErrorPageMessage } from '../../components/ErrorPageMessage/ErrorPageMessage';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';

export default class ServerError extends Block<{}> {
  initChildren() {
    this.children.info = new ErrorPageMessage(serverErrorMessage);
    this.children.button = new RedirectButton(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}

export const serverErrorMessage: IErrorPageMessage = {
  code: '500',
  message: 'Ooops, we are working on it. Don\'t be confused',
};
