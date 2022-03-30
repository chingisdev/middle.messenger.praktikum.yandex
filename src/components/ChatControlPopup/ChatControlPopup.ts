import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { IInputField, InputField } from '../InputField/InputField';
import Button from '../Button';

export interface IPopup {
  title: string;
  field: InputField | null;
  submit: Button;
  events?: Record<string, (event) => void>;
}

interface IPopupPath {
  createChat: null,
  addUser: null,
  deleteChat: null,
  deleteUser: null,
}



export class ChatControlPopup extends Block<any> {
  constructor(props: IPopup, path: keyof IPopupPath) {
    super(props);

    const submitPopup = this.definePopup(path);

    //тут будут разные методы залетать в submit, которые будут разные ручки дергать
    this.setProps({
      events: {
        submit: (event) => {
          submitPopup(event);
          debugger;
          this.hide();
        }
      }
    })
  }

  definePopup(path) {
    switch (path) {
      case 'createChat': {
        return this.onCreateChat.bind(this);
      }
      case 'deleteChat': {
        break;
      }
      case 'addUser': {
        break;
      }
      case 'deleteUser': {
        break;
      }
      default:
        return;
    }
  }

  async onCreateChat(event) {
    event.preventDefault();
    const title = event.currentTarget.querySelector('input').value;
    //обращение к контроллеру
    console.log('title', title);
  }



  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
