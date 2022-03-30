import { EntranceForm, IEntranceForm, TForm } from '../../components/EntranceForm/EntranceForm';
import { initFormFields } from '../../utils/Components/Validation';
import InputField from '../../components/InputField';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import { router } from '../../utils/Components/Router';
import Input from '../../components/Input';
import { IInputField } from '../../components/InputField/InputField';
import Button from '../../components/Button';
import { IButton } from '../../components/Button/Button';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';
import AuthController from '../../controllers/AuthController';

const partialClass = 'login__field-box';

//TODO: вынести добавление эвентов инпута в логику компонента
export const loginRedirectBtn: IButton = {
  textClass: 'login__link login__link_redir',
  buttonClass: 'login__redirect',
  type: 'button',
  textVisible: 'visible',
  name: 'Register',
  divVisible: 'hidden',
  events: {
    click: () => {
      window.entranceForm = {};
      // pseudoRouter('register');
      router.go('/signup');
    },
  },
};

const loginInput: Input = new Input({
  class: 'login__input',
  type: 'login',
  minLength: '3',
  name: 'login',
  required: 'required',
  rootClass: partialClass,
});

const passwordInput: Input = new Input({
  class: 'login__input',
  type: 'password',
  minLength: '8',
  name: 'password',
  required: 'required',
  rootClass: partialClass,
});

const commonInputProps: IInputField = {
  errorClass: 'login__input-error',
  labelClass: 'login__field-label',
  partialClass,
};

const passwordField: IInputField = {
  ...commonInputProps,
  title: 'Password',
  name: 'password',
  input: passwordInput,
};

const loginField: IInputField = {
  ...commonInputProps,
  title: 'Login',
  name: 'login',
  input: loginInput,
};

function createLoginProp(): TForm {
  return {
    fields: new List({
      listClass: 'login__field-box',
      blockClass: 'login__block',
      list: [new InputField(loginField), new InputField(passwordField)],
    }),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Sign in',
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
            // const { reason } = JSON.parse(e);
            console.log(e);
          }
        }
      }
    }),
    redirect: new Button(loginRedirectBtn),
  };
}

export class Login extends Block<{}> {
  constructor() {
    super();
    initFormFields(['password', 'email']);
  }

  protected initChildren() {
    const prop = createLoginProp();
    this.children.form = new EntranceForm(prop, 'signin');
  }

  protected render(): DocumentFragment {
    return this.compile(template, {});
  }
}
