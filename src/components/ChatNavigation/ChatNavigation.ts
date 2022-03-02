import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button, { IButton } from '../Button/Button';
import Search, { ISearch } from '../ChatSearch/Search';
import List, { IList } from '../List/List';
import ChatPreview from '../ChatPreview/ChatPreview';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';

export const searchAtr: ISearch = {
  searchClass: 'search-input',
  events: {
    focus: (event) => {
      event.target.placeholder = '';
    },
    blur: (event) => {
      event.target.placeholder = 'search';
    },
  },
};
export const profileBtnAtr: IButton = {
  buttonClass: 'navigation__profile-link',
  type: 'button',
  textClass: 'navigation__profile',
  textVisible: 'visible',
  name: 'Profile',
  arrowClass: 'navigation__profile-arrow arrow__right',
  divVisible: 'visible',
  events: {
    click: () => pseudoRouter('profile'),
  },
};
export default class ChatNavigation extends Block<{}> {
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
  const prop = [];
  for (let i = 0; i < 20; i++) {
    prop.push(new ChatPreview({
      name: 'Batman',
      lastMessage: 'I wear a mask. And that mask, it’s not to hide who I am, but to create what I am.',
      lastMessageTime: '23:59',
      unreadQuantity: `${i}`,
      events: {
        click: (event) => {
          console.log('click on chat');
        },
      },
    }));
  }
  return {
    class: 'chat__list',
    list: prop,
  };
}

