import { EntranceForm, IEntranceForm, TForm } from '../../components/EntranceForm/EntranceForm';
import { initFormFields } from '../../utils/Components/Validation';
import InputField from '../../components/InputField';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Input from '../../components/Input';
import { router } from '../../utils/Components/Router';
import { IInputField } from '../../components/InputField/InputField';
import Button from '../../components/Button';
import { IButton } from '../../components/Button/Button';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';
import AuthController, { ControllerSignUpData } from '../../controllers/AuthController';

/*
* todo:
*  2. Убрать кнопку логаута из формы
*  3. Спроектировать стор
*  4. Осуществить Редирект при успешной регистрации/логине
* */


const partialClass = 'login__field-box';

const commonInputProps: IInputField = {
  errorClass: 'login__input-error',
  labelClass: 'login__field-label',
  partialClass,
};

const emailInput: Input = new Input({
  class: 'login__input',
  type: 'email',
  minLength: '5',
  name: 'email',
  rootClass: partialClass,
});

const loginInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '3',
  name: 'login',
  rootClass: partialClass,
});

const passwordInput: Input = new Input({
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  rootClass: partialClass,
});

const confirmPassInput: Input = new Input({
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'confirm',
  rootClass: partialClass,
});

const firstNameInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'first_name',
  rootClass: partialClass,
});

const secondNameInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '2',
  name: 'second_name',
  rootClass: partialClass,
});

const phoneInput: Input = new Input({
  class: 'login__input',
  type: 'text',
  minLength: '10',
  name: 'phone',
  rootClass: partialClass,
});

export const registerRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Sign in',
  divVisible: 'hidden',
  events: {
    click: () => {
      window.entranceForm = {};
      // pseudoRouter('login');
      router.go('/');
    },
  },
};

const loginField: IInputField = {
  ...commonInputProps,
  title: 'Login',
  name: 'login',
  input: loginInput,
};

const passwordField: IInputField = {
  ...commonInputProps,
  title: 'Password',
  name: 'password',
  input: passwordInput,
};

const firstNameField: IInputField = {
  ...commonInputProps,
  title: 'First Name',
  name: 'first_name',
  input: firstNameInput,
};

const secondNameField: IInputField = {
  ...commonInputProps,
  title: 'Second Name',
  name: 'second_name',
  input: secondNameInput,
};

const phoneField: IInputField = {
  ...commonInputProps,
  title: 'Phone',
  name: 'phone',
  input: phoneInput,
};

const emailField: IInputField = {
  ...commonInputProps,
  title: 'Email',
  name: 'email',
  input: emailInput,
};

const confirmPassField: IInputField = {
  ...commonInputProps,
  title: 'Confirm Password',
  name: 'password',
  input: confirmPassInput,
};

// function createRegisterProp(): IEntranceForm {
function createRegisterProp(): TForm {
  return {
    fields: new List({
      blockClass: 'login__block',
      list: [
        new InputField(emailField),
        new InputField(loginField),
        new InputField(firstNameField),
        new InputField(secondNameField),
        new InputField(phoneField),
        new InputField(passwordField),
        new InputField(confirmPassField),
      ],
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Register',
    }),
    logout: new Button({
      buttonClass: 'login__submit-btn',
      type: 'button',
      textClass: 'login__link',
      textVisible: 'visible',
      divVisible: 'hidden',
      name: 'Sign Out',
      events: {
        click: async () => {
          try {
            await AuthController.signOut();
          } catch (e) {
            const { reason } = JSON.parse(e);
            console.log(reason);
          }
        }
      }
    }),
    redirect: new Button(registerRedirectBtn),
  };
}

export class Register extends Block<{}> {
  constructor() {
    super();
    initFormFields(['password', 'email', 'login', 'confirm',
      'first_name', 'second_name', 'phone']);
  }

  protected initChildren() {
    const prop = createRegisterProp();
    this.children.form = new EntranceForm(prop, 'signup');
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
