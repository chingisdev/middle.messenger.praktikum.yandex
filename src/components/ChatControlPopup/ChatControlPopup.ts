import Block from '../../utils/Components/Block';
import template from './template.hbs';
import Button from '../Button';
import ControlButton from '../ControlButton';

export class ChatControlPopup extends Block<any> {
  protected initChildren(props) {
    this.children.create = new ControlButton({
      action: 'create',
      text: 'Create chat',
    });
    this.children.delete = new ControlButton({
      action: 'delete',
      text: 'Delete chat',
    })
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
