import template from './template.hbs';
import Block from '../../utils/Components/Block';
import {
  createPatternValidator,
  initFormFields, saveGlobalForm,
  validateOnSubmit, validation
} from '../../utils/Components/Validation';
import Button, { IButton } from '../../components/Button/Button';
import ProfileForm, { IProfileForm } from '../../components/ProfileForm/ProfileForm';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import List from '../../components/List/List';
import InputField, { IInputField } from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';

export default class ChangePassword extends Block<{}> {
  constructor() {
    super();
    initFormFields([
      'old_password',
      'new_password',
      'confirm_password',
    ]);
  }
  protected initChildren() {
    this.children.button = new Button(backBtnAtr);
    const formProps = createUpdateForm();
    this.children.form = new ProfileForm(formProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

const validator = createPatternValidator();

function createUpdateForm(): IProfileForm {
  return {
    fields: createProfileFields(),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Change password'
    }),
    events: {
      submit: (event) => {
        event.preventDefault();
        validateOnSubmit('profile', validator);
      },
    },
  };
}

function createProfileFields() {
  return new List({
    blockClass: 'profile__list',
    listClass: 'profile__list_wrapper',
    list: [
      new InputField(oldPassField),
      new InputField(newPassField),
      new InputField(confirmPassField),
    ]
  });
}

const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    click: () => pseudoRouter('profile'),
  },
};

const partialClass = 'profile__part';


const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
}

const oldPassInput: Input = new Input({
  class: 'profile__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
      saveGlobalForm('old_password', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
    }
  },
});

const oldPassField: IInputField = {
  ...commonInputProps,
  name: 'old_password',
  title: 'Old Password',
  input: oldPassInput,
};

const newPassInput: Input = new Input({
  class: 'profile__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
      saveGlobalForm('new_password', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
    }
  },
});

const newPassField: IInputField = {
  ...commonInputProps,
  name: 'new_password',
  title: 'New Password',
  input: newPassInput,
};

const confirmPassInput: Input = new Input({
  class: 'profile__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
      saveGlobalForm('confirm_password', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'password', validator);
    }
  },
});

const confirmPassField: IInputField = {
  ...commonInputProps,
  name: 'confirm_password',
  title: 'Confirm Password',
  input: confirmPassInput,
};
