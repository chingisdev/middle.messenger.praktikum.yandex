import { Button, IButton } from '../../components/Button/Button';
import Input from '../../components/Input';
import { InputField } from '../../components/InputField/InputField';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import ProfileName from '../../components/ProfileName';
import template from './template.hbs';
import { router } from '../../utils/Components/Router';
import { backBtnAtr } from '../ChangePass/ChangePassword';

export const partialClass = 'profile__part';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
};

const profileUpdateBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Update profile',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => router.go('/update'),
  },
};

const changePassBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Change password',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    click: () => router.go('/change-password'),
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
    // click: () => pseudoRouter('login'),
  },
};

function createProfileControlBtn() {
  return new List({
    blockClass: 'profile__list',
    listClass: 'profile__list_wrapper',
    list: [new Button(profileUpdateBtn), new Button(changePassBtn), new Button(profileExitBtn)],
  });
}

export function makeInputFields({fields, isDisable, partialClass}) {
  return Object.entries(fields)
    .map(([key, value]) => {
      const name = key.toLowerCase();
      return new InputField({
        ...commonInputProps,
        name,
        title: key,
        input: new Input({
          name,
          class: 'profile__input',
          placeholder: value as string,
          disabled: isDisable ? 'disabled': '',
          rootClass: partialClass,
        })
      });
    });
}

export function createProfileFields(inputData) {
  const blockClass = 'profile__list';
  const listClass = 'profile__list_wrapper';
  const list = makeInputFields(inputData);
  return new List({
    blockClass,
    listClass,
    list
  });
}

export class Profile extends Block<{}> {
  constructor(props) {
    super(props);
  }

  protected initChildren(props) {
    const {
      avatar,
      display_name: name,
      id,
      ...fields
    } = props;
    this.children.button = new Button(backBtnAtr);
    this.children.name = new ProfileName({ name });
    this.children.fields = createProfileFields({fields, isDisable: true, partialClass});
    this.children.control = createProfileControlBtn();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
