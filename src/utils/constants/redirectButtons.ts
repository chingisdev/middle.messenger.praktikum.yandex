import { pseudoRouter } from '../Components/PseudoRouter';
import { IButton } from '../../components/Button/Button';

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

export const submitBtnAtr: IButton = {
  buttonClass: 'login__submit-btn',
  type: 'submit',
  textClass: 'login__link',
  textVisible: 'visible',
  divVisible: 'hidden',
};
