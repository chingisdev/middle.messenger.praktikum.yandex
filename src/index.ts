import { router } from './utils/Components/Router';
import AuthController from './controllers/AuthController';
import store from './utils/Components/Store';
import ChatControlPopup from './components/ChatControlPopup';
import { renderDOM } from './utils/Components/renderDOM';
import { ROOT_PATH } from './utils/constants/environment';
import InputField from './components/InputField';
import Button from './components/Button';
import Input from './components/Input';
import ChatController from './controllers/ChatController';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

export const popupCreateChat = new ChatControlPopup({
  title: 'Create Chat',
  field: new InputField({
    errorClass: 'login__input-error',
    labelClass: 'login__field-label',
    partialClass: 'login__field-box',
    // title: 'create chat',
    name: 'create chat',
    input: new Input({
      class: 'login__input',
      type: 'text',
      minLength: '3',
      name: 'create chat',
      rootClass: 'login__field-box',
      placeholder: 'insert chat name',
    })
  }),
  submit: new Button({
    buttonClass: 'login__submit-btn',
    type: 'submit',
    divVisible: 'hidden',
    name: 'Create Chat',
  }),
}, 'createChat');
renderDOM(ROOT_PATH, popupCreateChat);
popupCreateChat.hide();

window.entranceForm = {};
//todo: change redirect to chats
document.addEventListener('DOMContentLoaded', async () => {


  let path = '/';
  try {
    const user = await AuthController.fetchUser();
    console.log('user', user);
    await ChatController.fetchChats();
    if (!user) {
      throw new Error('User is not here');
    }
    path = '/chats';
  } catch (err) {
    console.log(err, err.reason, '/ Error fetching user');
  }
  console.log(path);
  router.start();
  router.go(path);
});
