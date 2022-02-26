import Block from '../../utils/Components/Block';
import template from './template.hbs';
import List from '../List/List';
import { generateMessages } from '../../utils/fakeGenerators';
import Header from '../ChatHeader/Header';
import Button from '../Button/Button';
import SendMessage from '../ChatSendMessage/SendMessage';
import { actionBtnAtr, attachBtnAtr, sendBtnAtr } from '../../utils/constants/buttons';

export default class ChatWindow extends Block {
  protected initChildren() {
    this.children.header = new Header({
      name: 'Person',
      button: new Button(actionBtnAtr),
    });
    const prop = generateMessages();
    this.children.discussion = new List(prop);
    this.children.message = new SendMessage({
      attach: new Button(attachBtnAtr),
      send: new Button(sendBtnAtr),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
