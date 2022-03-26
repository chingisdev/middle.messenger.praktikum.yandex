import { Button, IButton } from '../../components/Button/Button';
import {
  freeAllInput, initFormFields,
} from '../../utils/Components/Validation';
import { IProfileForm, ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Block from '../../utils/Components/Block';
import List from '../../components/List';
import template from './template.hbs';
import { router } from '../../utils/Components/Router';
import { createProfileFields } from '../Profile/Profile';
import UsersController, { IPassword } from '../../controllers/UsersController';


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



function makeSnakeCaseKeys(obj) {
  const convertedData = {};
  Object.entries(obj).forEach(([key, value]) => {
    const newKey = key.split(' ')
      .map((value, index) => {
        if (index === 0) {
          return value;
        } else {
          return `${value[0].toUpperCase()}${value.slice(1)}`
        }
      })
      .join('');
    convertedData[newKey] = value;
  });
  console.log('converted', convertedData);
  return convertedData;
}

function createUpdateForm(data): IProfileForm {
  return {
    fields: new List(createProfileFields(data)),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Change password',
    }),
    events: {
      submit: async (event) => {
        event.preventDefault();
        const inputs = document.querySelectorAll('input');
        const data = {};
        inputs.forEach((value) => {
          data[value.name] = value.value;
        });
        const dataToSend = makeSnakeCaseKeys(data);

        try {
          await UsersController.updatePassword(dataToSend as IPassword)
        } catch (e) {
          console.log(e);
        }
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



  //TODO: add placeholder generation
  protected initChildren() {
    this.children.button = new Button(backBtnAtr);
    const formProps = createUpdateForm({
      fields,
      isDisable: false,
      partialClass,
    })
    this.children.form = new ProfileForm(formProps);
    // console.log(document.querySelectorAll('input'));
    console.log(this.children.form.getChildren().fields);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}

const fields = {
  old_password: '',
  new_password: '',
  confirm_password: '',
}
