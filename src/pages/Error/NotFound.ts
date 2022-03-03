import Block from '../../utils/Components/Block';
import template from './template.hbs';
import RedirectButton from '../../components/Button/Button';
import ErrorPageMessage, {
  IErrorPageMessage,
} from '../../components/ErrorPageMessage/ErrorPageMessage';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';

export const notFoundMessage: IErrorPageMessage = {
  code: '404',
  message: 'Wrong gate',
};

export default class NotFound extends Block<{}> {
  initChildren() {
    this.children.info = new ErrorPageMessage(notFoundMessage);
    this.children.button = new RedirectButton(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}
