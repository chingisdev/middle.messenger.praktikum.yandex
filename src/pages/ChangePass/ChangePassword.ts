import { Button, IButton } from '../../components/Button/Button';
import {
  freeAllInput, initFormFields,
  makeEmpty, saveGlobalForm,
  validation
} from '../../utils/Components/Validation';
import InputField from '../../components/InputField';
import { IProfileForm, ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Input from '../../components/Input';
import { IInputField } from '../../components/InputField/InputField';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';
import { router } from '../../utils/Components/Router';


export const backBtnAtr: IButton = {
  buttonClass: 'profile__back-button',
  arrowClass: 'arrow arrow__left',
  divVisible: 'visible',
  events: {
    click: () => {
      window.entranceForm = {};
      freeAllInput();
      router.back();
    },
  },
};

const partialClass = 'profile__part';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
};

const oldPassInput: Input = new Input({
  class: 'profile__input',
  type: 'password',
  minLength: '8',
  name: 'password_old',
  placeholder: 'enter your old password',
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
  placeholder: 'enter new password',
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
  name: 'password_confirm',
  placeholder: 'repeat your password please',
});

const confirmPassField: IInputField = {
  ...commonInputProps,
  name: 'confirm_password',
  title: 'Confirm Password',
  input: confirmPassInput,
};

function createProfileFields() {
  return new List({
    blockClass: 'profile__list',
    listClass: 'profile__list_wrapper',
    list: [
      new InputField(oldPassField),
      new InputField(newPassField),
      new InputField(confirmPassField),
    ],
  });
}

function createUpdateForm(): IProfileForm {
  return {
    fields: createProfileFields(),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Change password',
    }),
    events: {
      submit: (event) => {
        event.preventDefault();
        // validateOnSubmit('profile', validator);
      },
    },
  };
}

export class ChangePassword extends Block<{}> {
  constructor() {
    super();
    initFormFields([
      'password_old',
      'new_password',
      'password_confirm',
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
