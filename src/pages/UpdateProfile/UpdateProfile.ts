import { initFormFields } from '../../utils/Components/Validation';
import { IProfileForm, ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Button from '../../components/Button';
import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { backBtnAtr } from '../ChangePass/ChangePassword';
import { createProfileFields, partialClass } from '../Profile/Profile';
import UsersController from '../../controllers/UsersController';
import { merge } from '../../utils/utilFunctions/merge';
import { IUpdateProfile } from '../../api/UsersAPI';
import store from '../../utils/Components/Store';
import List from '../../components/List';


/*
TODO: сделать общую форму, инкапсулировать создание сабмита внутри класса формы
 как в логине и регистрации
 */
function createUpdateForm(data): IProfileForm {
  return {
    fields: new List(createProfileFields(data)),
    submit: new Button({
      ...submitBtnAtr,
      name: 'Update profile',
    }),
    events: {
      submit: async (event) => {
        event.preventDefault();
        const data: Record<string, any> = {};
        const {avatar, id, ...fields} = store.getState().currentUser;
        // @ts-ignore
        merge(data, fields);
        Object.entries(window.entranceForm).forEach(([key, value]) => {
          if (window.entranceForm[key]) {
            data[key] = value;
          }
        })

        // merge(data, window.entranceForm);
        console.log(data);
        try {
          await UsersController.updateProfile(data as IUpdateProfile);
        } catch (err) {
          alert(err);
        }
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
    const { avatar, id, ...fields} = props;
    console.log('fields', fields);
    this.children.button = new Button(backBtnAtr);
    const formProps = createUpdateForm({fields, isDisable: false, partialClass});
    this.children.form = new ProfileForm(formProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}
