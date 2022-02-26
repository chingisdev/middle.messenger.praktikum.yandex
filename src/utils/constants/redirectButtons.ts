import { IButton } from './interfaces';
import { pseudoRouter } from '../Components/PseudoRouter';

export const redirectBtnAtr: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Back to chats',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('chat'),
  },
};
export const registerRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Sign in',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('login'),
  },
};
export const loginRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Register',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('register'),
  },
};
export const submitBtnAtr: IButton = {
  buttonClass: 'login__submit-btn',
  type: 'submit',
  textClass: 'login__link',
  textVisible: 'visible',
  divVisible: 'hidden',
};
export const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    click: () => pseudoRouter('chat'),
  },
};
export const profileExitBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-logout',
  type: 'button',
  name: 'Log out',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => pseudoRouter('login'),
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
