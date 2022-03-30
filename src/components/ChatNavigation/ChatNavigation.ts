import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button';
import { IButton } from '../Button/Button';
import { ISearch, Search } from '../ChatSearch/Search';
import ChatPreview from '../ChatPreview';
import { IList } from '../List/List';
import { router } from '../../utils/Components/Router';
import EventBus from '../../utils/Components/eventBus';
import ChatControlPopup from '../ChatControlPopup';
import { popupCreateChat } from '../../index';

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
    click: () => router.go('/profile'),
  },
};

export const createChatBtn: IButton = {
  buttonClass: 'navigation__profile-link',
  type: 'button',
  textClass: 'navigation__profile',
  textVisible: 'visible',
  name: 'Create chat',
  divVisible: 'hidden',
  events: {
    click: () => {
      console.log('clicked create chat');
      popupCreateChat.show();
    },
  }
}

function createChatPreviews(): IList {
  const prop = [];
  for (let i = 0; i < 20; i += 1) {
    prop.push(new ChatPreview({
      name: 'Batman',
      lastMessage: 'I wear a mask. '
        + 'And that mask, it’s not to hide who I am, but to create what I am.',
      lastMessageTime: '23:59',
      unreadQuantity: `${i}`,
      events: {
        click: (event) => {
          event.preventDefault();
          console.log('click on chat');
        },
      },
    }));
  }
  return {
    blockClass: 'chat__list',
    listClass: 'chat__list_wrapper',
    list: prop,
  };
}

export class ChatNavigation extends Block<{}> {
  constructor() {
    super();
  }

  protected initChildren() {
    this.children.controls = new Button(createChatBtn);
    this.children.button = new Button(profileBtnAtr);
    this.children.search = new Search(searchAtr);
    // this.children.popup = new ChatControlPopup();
    // this.children.popup.hide();
    // const chatsProp = createChatPreviews();
    // this.children.chats = new List(chatsProp);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
