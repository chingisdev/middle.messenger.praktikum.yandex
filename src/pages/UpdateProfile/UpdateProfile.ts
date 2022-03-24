import {
  freeAllInput, initFormFields,
} from '../../utils/Components/Validation';
import InputField from '../../components/InputField';
import { IProfileForm, ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Input from '../../components/Input';
import { IInputField } from '../../components/InputField/InputField';
import Button from '../../components/Button';
import { IButton } from '../../components/Button/Button';
// import { pseudoRouter } from '../../utils/Components/PseudoRouter';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';
import { backBtnAtr } from '../ChangePass/ChangePassword';
import { createProfileFields } from '../Profile/Profile';

const partialClass = 'profile__part';

const commonInputProps = {
  partialClass,
  containerClass: 'profile__field',
  labelClass: 'profile__field-text profile__field-text_left',
  errorClass: 'login__input-error',
};

//TODO: в полях инпутов placeholder ДОЛЖЕН СОДЕРЖАТЬ инфу из global state.
const emailInput: Input = new Input({
  class: 'profile__input',
  type: 'email',
  minLength: '5',
  name: 'email',
  placeholder: 'pochta@mail.ru',
});

const emailField: IInputField = {
  ...commonInputProps,
  name: 'email',
  title: 'Email',
  input: emailInput,
};

const loginInput: Input = new Input({
  class: 'profile__input',
  placeholder: 'Ivanio',
  type: 'text',
  minLength: '3',
  name: 'login',
});

const loginField: IInputField = {
  ...commonInputProps,
  name: 'login',
  title: 'Login',
  input: loginInput,
};

const firstNameInput = new Input({
  class: 'profile__input',
  placeholder: 'Ivan',
  type: 'text',
  minLength: '2',
  name: 'first_name',
});

const firstNameField: IInputField = {
  ...commonInputProps,
  name: 'first_name',
  title: 'First Name',
  input: firstNameInput,
};

const secondNameInput: Input = new Input({
  class: 'profile__input',
  placeholder: 'Ivanov',
  type: 'text',
  minLength: '2',
  name: 'second_name',
});

const secondNameField: IInputField = {
  ...commonInputProps,
  name: 'second_name',
  title: 'Second Name',
  input: secondNameInput,
};

const displayNameInput: Input = new Input({
  class: 'profile__input',
  placeholder: 'Iva',
  type: 'text',
  minLength: '3',
  name: 'display_name',
});

const displayNameField: IInputField = {
  ...commonInputProps,
  title: 'Display Name',
  name: 'display_name',
  input: displayNameInput,
};

const phoneInput = new Input({
  class: 'profile__input',
  placeholder: '+7 (909) 967 30 30',
  type: 'text',
  minLength: '10',
  name: 'phone',
});

const phoneField: IInputField = {
  ...commonInputProps,
  name: 'phone',
  title: 'Phone',
  input: phoneInput,
};

// function createProfileFields() {
//   return new List({
//     blockClass: 'profile__list',
//     listClass: 'profile__list_wrapper',
//     list: [
//       new InputField(emailField),
//       new InputField(loginField),
//       new InputField(firstNameField),
//       new InputField(secondNameField),
//       new InputField(displayNameField),
//       new InputField(phoneField),
//     ],
//   });
// }

function createUpdateForm(data): IProfileForm {
  return {
    fields: createProfileFields(data),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Update profile',
    }),
    events: {
      submit: (event) => {
        event.preventDefault();
        // validateOnSubmit('profile', validator);
      },
    },
  };
}

export class UpdateProfile extends Block<{}> {
  constructor(props) {
    super(props);
    initFormFields([
      'email',
      'login',
      'first_name',
      'second_name',
      'display_name',
      'phone',
    ]);
  }

  protected initChildren(props) {
    const { avatar, display_name: name, id, ...fields} = props;
    console.log('fields', fields);
    this.children.button = new Button(backBtnAtr);
    const formProps = createUpdateForm({fields, isDisable: false});
    this.children.form = new ProfileForm(formProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}
