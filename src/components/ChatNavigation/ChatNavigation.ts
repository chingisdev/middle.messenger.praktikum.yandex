import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button';
import { IButton } from '../Button/Button';
import { ISearch, Search } from '../ChatSearch/Search';
import ChatPreview from '../ChatPreview';
import { IList } from '../List/List';
import { router } from '../../utils/Components/Router';
import EventBus from '../../utils/Components/eventBus';


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
  constructor(props) {
    super(props);

    this.eventBus().on(Block.EVENTS.CONTEXT_MENU, this.showAction.bind(this));
  }

  showAction() {
    this.children.popup.show()
  }

  protected initChildren() {
    this.children.button = new Button(profileBtnAtr);
    this.children.search = new Search(searchAtr);
    this.children.popup = new ChatControlPopup();
    // const chatsProp = createChatPreviews();
    // this.children.chats = new List(chatsProp);
  }



  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
