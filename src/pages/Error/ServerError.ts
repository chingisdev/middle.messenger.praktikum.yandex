import Block from '../../utils/Components/Block';
import template from './template.hbs';
import RedirectButton from '../../components/Button/Button';
import ErrorPageMessage from '../../components/ErrorPageMessage/ErrorPageMessage';
import { serverErrorMessage } from '../../utils/constants/markup';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';

export default class ServerError extends Block {
  initChildren() {
    this.children.info = new ErrorPageMessage(serverErrorMessage);
    this.children.button = new RedirectButton(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}
