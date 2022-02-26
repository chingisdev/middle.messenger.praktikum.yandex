import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button from '../../components/Button/Button';
import { profileNameAtr } from '../../utils/constants/markup';
import ProfileName from '../../components/ProfileName/ProfileName';
import { createProfileControlBtn, createProfileFields } from '../../utils/fakeGenerators';
import { backBtnAtr } from '../../utils/constants/redirectButtons';

export default class Profile extends Block {
  protected initChildren() {
    this.children.button = new Button(backBtnAtr);
    this.children.name = new ProfileName(profileNameAtr);
    this.children.fields = createProfileFields();
    this.children.control = createProfileControlBtn();
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}
