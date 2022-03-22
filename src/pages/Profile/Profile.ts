import { Button, IButton } from '../../components/Button/Button';
import Input from '../../components/Input';
import { IInputField, InputField } from '../../components/InputField/InputField';
// import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import ProfileName from '../../components/ProfileName';
import { IProfileName } from '../../components/ProfileName/ProfileName';
import template from './template.hbs';

const partialClass = 'profile__part';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
};

const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    // click: () => pseudoRouter('chat'),
  },
};

const profileUpdateBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Update profile',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    // click: () => pseudoRouter('update'),
  },
};

const profilePassBtn: IButton = {
  buttonClass: 'profile__control',
  textClass: 'profile__control-redir',
  type: 'button',
  name: 'Change password',
  textVisible: 'visible',
  divVisible: 'hidden',
  events: {
    // click: () => pseudoRouter('change'),
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
    list: [new Button(profileUpdateBtn), new Button(profilePassBtn), new Button(profileExitBtn)],
  });
}

function makeInputFields(fields) {
  return Object.entries(fields)
    .map(([key, value]) => {
      return new InputField({
        ...commonInputProps,
        title: key,
        input: new Input({
          class: 'profile__input',
          placeholder: value,
          disabled: 'disabled'
        })
      });
    });
}

function createProfileFields(fields) {
  const blockClass = 'profile__list';
  const list = makeInputFields(fields);
  return new List({
    blockClass,
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
    this.children.fields = createProfileFields(fields);
    this.children.control = createProfileControlBtn();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
