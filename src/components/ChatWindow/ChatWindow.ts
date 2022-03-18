import Header from '../ChatHeader';
import Button from '../Button';
import { IButton } from '../Button/Button';
import Block from '../../utils/Components/Block';
import { IList } from '../List/List';
import SendMessage from '../ChatSendMessage';
import template from './template.hbs';

const attachBtnAtr: IButton = {
  buttonClass: 'message__attach',
  textVisible: 'hidden',
  divVisible: 'hidden',
  events: {
    click: () => console.log('attach files to chat'),
  },
};

const sendBtnAtr: IButton = {
  buttonClass: 'message__send',
  type: 'button',
  textVisible: 'hidden',
  divVisible: 'visible',
  arrowClass: 'arrow arrow__right',
  events: {
    click: () => {
      console.log('send message');
    },
  },
};

const actionBtnAtr: IButton = {
  buttonClass: 'header__action',
  type: 'button',
  textVisible: 'hidden',
  arrowClass: 'header__image',
  divVisible: 'visible',
  events: {
    click: () => console.log('do some action with chat'),
  },
};

function generateMessages(): IList {
  const prop = [];
  const fraze = 'random fraze';
  let count = 0;
  // for (let n = 0; n < 10; n += 1) {
  //   prop[count] = new ChatDate({
  //     date: `${n + 1} June`,
  //   });
  //   count += 1;
  //   for (let i = 0; i < 10; i += 1) {
  //     let message = fraze;
  //     let j = 0;
  //     while (j < i % 5) {
  //       if (j % 2) {
  //         message = `${message}    ${message.toUpperCase()} ${message.length}   `;
  //       } else {
  //         message = `${message}    ${message.toLowerCase()} ${message.length}   `;
  //       }
  //       j += 1;
  //     }
  //     const flag = i % 2 === 0;
  //     prop[count] = new Message({
  //       positionClass: flag ? 'left' : 'right',
  //       backgroundClass: flag ? 'left' : 'right',
  //       date: `14:${i < 10 ? `0${i}` : i}`,
  //       message,
  //     });
  //     count += 1;
  //   }
  // }
  return {
    blockClass: 'discussion__list',
    listClass: 'discussion__list_wrapper',
    list: prop,
  };
}

export class ChatWindow extends Block<{}> {
  protected initChildren() {
    this.children.header = new Header({
      // name: 'Person',
      button: new Button(actionBtnAtr),
    });
    // const prop = generateMessages();
    // this.children.discussion = new List(prop);
    this.children.message = new SendMessage({
      attach: new Button(attachBtnAtr),
      send: new Button(sendBtnAtr),
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
