import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button';
import { IButton } from '../Button/Button';
import { ISearch, Search } from '../ChatSearch/Search';
import ChatPreview from '../ChatPreview';
import { IList, List } from '../List/List';
import { router } from '../../utils/Components/Router';
import EventBus from '../../utils/Components/eventBus';
import ChatControlPopup from '../ChatControlPopup';
import { popupCreateChat } from '../../index';
import store from '../../utils/Components/Store';

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
  let prop = [];
  const state = store.getState();
  if (state.currentChats) {
    //отрефакторить в функцию мапер
    prop = Array.from(state.currentChats).map((chat) => {
      return new ChatPreview({
        name: chat?.title,
        lastMessage: chat?.last_message?.content,
        lastMessageTime: chat?.last_message?.time, // конвертатор сюда нужен
        unreadQuantity: chat?.unread_count,
        events: {
          click: (event) => {
            event.preventDefault();
            console.log('click on chat');
          },
        }
      })
    });
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
    const chatsProp = createChatPreviews();
    this.children.chats = new List(chatsProp);
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
