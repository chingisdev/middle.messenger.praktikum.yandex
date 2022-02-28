import List from '../components/List/List';
import EntranceField from '../components/EntranceField/EntranceField';
import {
  confirmPasswordAttr,
  emailAttr,
  firstNameAttr,
  loginAttr,
  passwordAttr,
  phoneAttr,
  profileDisplayName,
  profileEmail,
  profileFirstName,
  profileLogin,
  profilePhone,
  profileSecondName,
  secondNameAttr,
} from './constants/markup';
import Button from '../components/Button/Button';
import { IForm, IList } from './constants/interfaces';
import Iterable from '../components/Iterable/Iterable';
import Preview from '../components/ChatPreview/Preview';
import Message from '../components/ChatMessage/Message';
import ChatDate from '../components/ChatDate/ChatDate';
import ProfileField from '../components/ProfileField/ProfileField';
import {
  profilePassBtn,
  profileUpdateBtn,
} from './constants/buttons';
import {
  loginRedirectBtn,
  profileExitBtn,
  registerRedirectBtn,
  submitBtnAtr,
} from './constants/redirectButtons';
import { logFormUserInput } from './Components/Validation';

export function generateMessages(): IList {
  const prop = {};
  const fraze = 'random fraze';
  let count = 0;
  for (let n = 0; n < 10; n++) {
    prop[count] = new ChatDate({
      date: `${n + 1} June`,
    });
    count++;
    for (let i = 0; i < 10; i++) {
      let message = fraze;
      let j = 0;
      while (j++ < i % 5) {
        if (j % 2) {
          message = `${message}    ${message.toUpperCase()} ${message.length}   `;
        } else {
          message = `${message}    ${message.toLowerCase()} ${message.length}   `;
        }
      }
      const flag = i % 2 === 0;
      prop[count] = new Message({
        positionClass: flag ? 'left' : 'right',
        backgroundClass: flag ? 'left' : 'right',
        date: `14:${i < 10 ? `0${i}` : i}`,
        message,
      });
      count++;
    }
  }
  return {
    class: 'discussion__scroll',
    list: new Iterable(prop),
  };
}

export function createChatPreviews(): IList {
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

export function createRegisterProp(): IForm {
  return {
    fields: new List({
      class: 'login__block',
      list: new Iterable({
        email: new EntranceField(emailAttr),
        login: new EntranceField(loginAttr),
        firstName: new EntranceField(firstNameAttr),
        secondName: new EntranceField(secondNameAttr),
        phone: new EntranceField(phoneAttr),
        password: new EntranceField(passwordAttr),
        confirmPas: new EntranceField(confirmPasswordAttr),
      }),
    }),
    submit: new Button({ ...submitBtnAtr, name: 'Register' }),
    redirect: new Button(registerRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logFormUserInput('chat');
      },
    },
  };
}

export function createLoginProp(): IForm {
  return {
    fields: new List({
      class: 'login__block',
      list: new Iterable({
        email: new EntranceField(emailAttr),
        password: new EntranceField(passwordAttr),
      }),
    }),
    submit: new Button({ ...submitBtnAtr, name: 'Sign in' }),
    redirect: new Button(loginRedirectBtn),
    events: {
      submit: (event) => {
        event.preventDefault();
        logFormUserInput('chat');
      },
    },
  };
}

export function createProfileFields() {
  return new List({
    class: 'profile__list',
    list: new Iterable({
      email: new ProfileField(profileEmail),
      login: new ProfileField(profileLogin),
      firstName: new ProfileField(profileFirstName),
      secondName: new ProfileField(profileSecondName),
      displayName: new ProfileField(profileDisplayName),
      phone: new ProfileField(profilePhone),
    }),
  });
}

export function createProfileControlBtn() {
  return new List({
    class: 'profile__list',
    list: new Iterable({
      updateProfile: new Button(profileUpdateBtn),
      changePassword: new Button(profilePassBtn),
      exit: new Button(profileExitBtn),
    }),
  });
}
