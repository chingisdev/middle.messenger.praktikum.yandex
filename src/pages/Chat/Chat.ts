import Block from '../../utils/Components/Block';
import template from './template.hbs';
import ChatNavigation from '../../components/ChatNavigation/ChatNavigation';
import ChatWindow from '../../components/ChatWindow/ChatWindow';

export default class Chat extends Block<{}> {
  protected initChildren() {
    this.children.navigation = new ChatNavigation();
    this.children.chatWindow = new ChatWindow();
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
