import Block from '../../utils/Components/Block';
import template from './template.hbs';
import RedirectButton from '../../components/Button/Button';
import ErrorPageMessage from '../../components/ErrorPageMessage/ErrorPageMessage';
import { notFoundMessage } from '../../utils/constants/markup';
import { redirectBtnAtr } from '../../utils/constants/redirectButtons';

export default class NotFound extends Block {
  initChildren() {
    this.children.info = new ErrorPageMessage(notFoundMessage);
    this.children.button = new RedirectButton(redirectBtnAtr);
  }

  render() {
    return this.compile(template, {});
  }
}
