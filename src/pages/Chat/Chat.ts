import Block from '../../utils/Components/Block';
import template from './template.hbs';
import ChatNavigation from '../../components/ChatNavigation';
import ChatWindow from '../../components/ChatWindow';

export default class Chat extends Block<{}> {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.navigation = new ChatNavigation();
    this.children.chatWindow = new ChatWindow();
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
