import { initFormFields } from '../../utils/Components/Validation';
import { IProfileForm, ProfileForm } from '../../components/ProfileForm/ProfileForm';
import { submitBtnAtr } from '../../utils/constants/redirectButtons';
import Button from '../../components/Button';
import Block from '../../utils/Components/Block';
import template from './template.hbs';
import { backBtnAtr } from '../ChangePass/ChangePassword';
import { createProfileFields, partialClass } from '../Profile/Profile';

//TODO: в полях инпутов placeholder ДОЛЖЕН СОДЕРЖАТЬ инфу из global state.

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
    const formProps = createUpdateForm({fields, isDisable: false, partialClass});
    this.children.form = new ProfileForm(formProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { });
  }
}
