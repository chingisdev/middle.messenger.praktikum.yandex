import Block from '../../utils/Components/Block';
import Button, { IButton } from '../../components/Button/Button';
import template from './template.hbs';
import List from '../../components/List/List';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import {
  createPatternValidator, initFormFields, saveGlobalForm, validateOnSubmit,
  validation
} from '../../utils/Components/Validation';
import InputField, { IInputField } from '../../components/InputField/InputField';
import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import Input from '../../components/Input/Input';
import ProfileForm, { IProfileForm } from '../../components/ProfileForm/ProfileForm';

export default class ProfileUpdateUserInfo extends Block<{}> {
  constructor() {
    super();
    initFormFields([
      'email',
      'login',
      'first_name',
      'second_name',
      'display_name',
      'phone',
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

const validator = createPatternValidator();

const partialClass = 'profile__part';

const inputSelector = 'profile__input';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
}

const emailInput: Input = new Input({
  class: inputSelector,
  type: 'email',
  minLength: '5',
  name: 'email',
  placeholder: 'pochta@mail.ru',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'email', validator);
      saveGlobalForm('email', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'email', validator);
    }
  },
});

const emailField: IInputField = {
  ...commonInputProps,
  name: 'email',
  title: 'Email',
  input: emailInput,
};

const loginInput: Input = new Input({
  class: inputSelector,
  placeholder: 'Ivanio',
  type: 'text',
  minLength: '3',
  name: 'login',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'login', validator);
      saveGlobalForm('login', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'login', validator);
    }
  },
});

const loginField: IInputField = {
  ...commonInputProps,
  name: 'login',
  title: 'Login',
  input: loginInput,
};

const firstNameInput = new Input({
  class: inputSelector,
  placeholder: 'Ivan',
  type: 'text',
  minLength: '2',
  name: 'first_name',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
      saveGlobalForm('first_name', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
    }
  },
});

const firstNameField: IInputField = {
  ...commonInputProps,
  name: 'first_name',
  title: 'First Name',
  input: firstNameInput,
};

const secondNameInput: Input = new Input({
  class: inputSelector,
  placeholder: 'Ivanov',
  type: 'text',
  minLength: '2',
  name: 'second_name',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
      saveGlobalForm('second_name', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
    }
  },
});

const secondNameField: IInputField = {
  ...commonInputProps,
  name: 'second_name',
  title: 'Second Name',
  input: secondNameInput,
};

const displayNameInput: Input = new Input({
  class: inputSelector,
  placeholder: 'Iva',
  type: 'text',
  minLength: '3',
  name: 'display_name',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'name', validator);
      saveGlobalForm('display_name', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'login', validator);
    }
  },
});

const displayNameField: IInputField = {
  ...commonInputProps,
  title: 'Display Name',
  name: 'display_name',
  input: displayNameInput,
};

const phoneInput = new Input({
  class: inputSelector,
  placeholder: '+7 (909) 967 30 30',
  type: 'text',
  minLength: '10',
  name: 'phone',
  events: {
    blur: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'phone', validator);
      saveGlobalForm('phone', event.currentTarget.value);
    },
    focus: (event) => {
      event.preventDefault();
      validation(event, partialClass, 'phone', validator);
    }
  },
});

const phoneField: IInputField = {
  ...commonInputProps,
  name: 'phone',
  title: 'Phone',
  input: phoneInput,
};
