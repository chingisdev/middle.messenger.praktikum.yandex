import Button from '../Button';
import Block from '../../utils/Components/Block';
import List from '../List';
import template from './template.hbs';
import { merge } from '../../utils/utilFunctions/merge';
import AuthController, { ControllerSignUpData } from '../../controllers/AuthController';
import { ISignInData } from '../../api/AuthAPI';
// import { ISignUpData } from '../../api/AuthAPI';
// import {
//   createPatternValidator,
//   validateOnSubmitClone,
//   validator
// } from '../../utils/Components/Validation';

export interface IEntranceForm {
  fields: List,
  submit: Button,
  redirect?: Button,
  events?: Record<string, (event) => void>,
}

export type TForm = Record<string, Block<any>>;

export class EntranceForm extends Block<TForm> {
// export class EntranceForm extends Block<IEntranceForm> {

  constructor(props: TForm, path) {
    console.log('props', props);
    super(props);

    const submitCallback = this.defineAuthMethod(path);

    // this.children.submit.setProps({
    //   events: {
    //     click: submitCallback
    //   }
    // })

    console.log(this.children);
    this.setProps({
      events: {
        submit: submitCallback
      }
    })
  }

  defineAuthMethod(path) {
    switch (path) {
      case 'signin': {
        return this.onSignIn.bind(this);
      }
      case 'signup': {
        return this.onSignUp.bind(this);
      }
      default:
        return;
    }
  }

  async onSignIn(e) {
    e.preventDefault();
    const data: Record<string, any> = {};
    merge(data, window.entranceForm);
    try {
      await AuthController.signIn(data as ISignInData);
    } catch (e) {
      alert(e.message);
    }
  }

  async onSignUp(e) {
    e.preventDefault();
    const data = {}
    merge(data, window.entranceForm);
    // const validity = validateOnSubmitClone(data, validator);
    // if (validity)
    try {
      await AuthController.signUp(data as ControllerSignUpData);
    } catch (e) {
      alert(e.message);
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}
