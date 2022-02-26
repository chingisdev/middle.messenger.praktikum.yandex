import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button/Button';
import { searchAtr } from '../../utils/constants/markup';
import Search from '../ChatSearch/Search';
import { createChatPreviews } from '../../utils/fakeGenerators';
import List from '../List/List';
import { profileBtnAtr } from '../../utils/constants/redirectButtons';

export default class ChatNavigation extends Block {
  protected initChildren() {
    this.children.button = new Button(profileBtnAtr);
    this.children.search = new Search(searchAtr);
    const chatsProp = createChatPreviews();
    this.children.chats = new List(chatsProp);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
