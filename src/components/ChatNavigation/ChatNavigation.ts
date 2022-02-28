import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button/Button';
import { searchAtr } from '../../utils/constants/markup';
import Search from '../ChatSearch/Search';
import List, { IList } from '../List/List';
import { profileBtnAtr } from '../../utils/constants/redirectButtons';
import Preview from '../ChatPreview/Preview';
import Iterable from '../Iterable/Iterable';

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

function createChatPreviews(): IList {
  const prop = {};
  for (let i = 0; i < 20; i++) {
    prop[`${i}`] = new Preview({
      name: 'Batman',
      lastMessage: 'I wear a mask. And that mask, it’s not to hide who I am, but to create what I am.',
      lastMessageTime: '23:59',
      unreadQuantity: `${i}`,
      events: {
        click: (event) => {
          console.log('click on chat');
        },
      },
    });
  }
  return {
    class: 'chat__list',
    list: new Iterable(prop),
  };
}

