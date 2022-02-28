import template from './template.hbs';
import Block from '../../utils/Components/Block';
import Button from '../../components/Button/Button';
import {
  profileDisplayName,
  profileEmail,
  profileFirstName,
  profileLogin,
  profileNameAtr,
  profilePhone,
  profileSecondName
} from '../../utils/constants/markup';
import ProfileName from '../../components/ProfileName/ProfileName';
import { backBtnAtr, profileExitBtn } from '../../utils/constants/redirectButtons';
import List from '../../components/List/List';
import Iterable from '../../components/Iterable/Iterable';
import ProfileField from '../../components/ProfileField/ProfileField';
import { profilePassBtn, profileUpdateBtn } from '../../utils/constants/buttons';

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

function createProfileFields() {
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

function createProfileControlBtn() {
  return new List({
    class: 'profile__list',
    list: new Iterable({
      updateProfile: new Button(profileUpdateBtn),
      changePassword: new Button(profilePassBtn),
      exit: new Button(profileExitBtn),
    }),
  });
}


