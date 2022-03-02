import Block from '../../utils/Components/Block';
import Button, { IButton } from '../../components/Button/Button';
import template from './template.hbs';
import List from '../../components/List/List';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { logUserInput, validation, validator } from '../../utils/Components/Validation';
import InputField, { IInputField } from '../../components/InputField/InputField';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import Input from '../../components/Input/Input';
import ProfileForm, { IProfileForm } from '../../components/ProfileForm/ProfileForm';

export default class ProfileUpdateUserInfo extends Block<{}> {
  protected initChildren() {
    this.children.button = new Button(backBtnAtr);
    const formProps = createUpdateForm();
    this.children.form = new ProfileForm(formProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

function createUpdateForm(): IProfileForm {
  return {
    fields: createProfileFields(),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Update profile'
    }),
    events: {
      submit: (event) => {
        event.preventDefault();
        logUserInput('chat');
      },
    },
  };
}

function createProfileFields() {
  return new List({
    blockClass: 'profile__list',
    listClass: 'profile__list_wrapper',
    list: [
      new InputField(emailField),
      new InputField(loginField),
      new InputField(firstNameField),
      new InputField(secondNameField),
      new InputField(displayNameField),
      new InputField(phoneField)
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

// TODO: add validation on fields. Compare with login page.
const commonInputProps = {
  partialClass: 'profile__part',
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
}

const emailInput: Input = new Input({
  class: "profile__input",
  type: 'email',
  minLength: '5',
  name: 'email',
  placeholder: 'pochta@mail.ru',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    },
  },
});

const emailField: IInputField = {
  ...commonInputProps,
  name: 'email',
  title: 'Email',
  input: emailInput,
};

const loginInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Ivanio',
  type: 'text',
  minLength: '3',
  name: 'login',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
  },
});

const loginField: IInputField = {
  ...commonInputProps,
  name: 'login',
  title: 'Login',
  input: loginInput,
};

const firstNameInput = new Input({
  class: "profile__input",
  placeholder: 'Ivan',
  type: 'text',
  minLength: '2',
  name: 'first_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
});

const firstNameField: IInputField = {
  ...commonInputProps,
  name: 'first_name',
  title: 'First Name',
  input: firstNameInput,
};

const secondNameInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Ivanov',
  type: 'text',
  minLength: '2',
  name: 'second_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
});

const secondNameField: IInputField = {
  ...commonInputProps,
  name: 'second_name',
  title: 'Second Name',
  input: secondNameInput,
};

const displayNameInput: Input = new Input({
  class: "profile__input",
  placeholder: 'Iva',
  type: 'text',
  minLength: '3',
  name: 'login',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
  },
});

const displayNameField: IInputField = {
  ...commonInputProps,
  title: 'Display Name',
  name: 'display_name',
  input: displayNameInput,
};

const phoneInput = new Input({
  class: "profile__input",
  placeholder: '+7 (909) 967 30 30',
  type: 'text',
  minLength: '10',
  name: 'phone',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
    focus: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
  },
});

const phoneField: IInputField = {
  ...commonInputProps,
  name: 'phone',
  title: 'Phone',
  input: phoneInput,
};
