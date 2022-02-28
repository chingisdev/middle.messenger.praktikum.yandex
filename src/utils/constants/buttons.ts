import { IButton } from '../../components/Button/Button';

export const attachBtnAtr: IButton = {
  buttonClass: 'message__attach',
  textVisible: 'hidden',
  divVisible: 'hidden',
  events: {
    click: () => console.log('attach files to chat'),
  },
};
export const sendBtnAtr: IButton = {
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
export const actionBtnAtr: IButton = {
  buttonClass: 'header__action',
  type: 'button',
  textVisible: 'hidden',
  arrowClass: 'header__image',
  divVisible: 'visible',
  events: {
    click: () => console.log('do some action with chat'),
  },
};

export const profileUpdateBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Update profile',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => console.log('update profile button'),
  },
};
export const profilePassBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Change password',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => console.log('change password button'),
  },
};
