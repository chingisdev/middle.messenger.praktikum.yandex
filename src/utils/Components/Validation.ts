import {
  EMAIL_REGEX,
  LOGIN_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from '../constants/environment';
import { pseudoRouter } from './PseudoRouter';

export function createPatternValidator() {
  let isValid: boolean = false;
  let pass: string = '';
  let confirmPass: string = '';
  return function (value: string, field: string): boolean {
    switch (field.toLowerCase()) {
      case 'email': {
        isValid = EMAIL_REGEX.test(value);
        break;
      }
      case 'password': {
        isValid = PASSWORD_REGEX.test(value);
        pass = value;
        if (confirmPass) {
          isValid = confirmPass === pass;
        }
        break;
      }
      case 'old': {
        isValid = PASSWORD_REGEX.test(value);
        break;
      }
      case 'confirm': {
        isValid = PASSWORD_REGEX.test(value);
        confirmPass = value;
        isValid = confirmPass === pass;
        break;
      }
      case 'login': {
        isValid = LOGIN_REGEX.test(value);
        break;
      }
      case 'phone': {
        isValid = PHONE_REGEX.test(value);
        break;
      }
      case 'name': {
        isValid = NAME_REGEX.test(value);
        break;
      }
      default:
        return false;
    }
    return isValid;
  };
}

export function makeEmpty(target) {
  target.value = '';
}

export function validation(event, partialClass, field, validator) {
  const insertedValue = event.currentTarget.value;
  let fieldNode = event.target;
  let nodeClasses = fieldNode.classList;
  while (!nodeClasses.contains(partialClass)) {
    fieldNode = fieldNode.parentElement;
    nodeClasses = fieldNode.classList;
  }

  const isValid = insertedValue ? validator(insertedValue, field) : false;
  const errorClassList = fieldNode.querySelector('span').classList;
  if (isValid) {
    errorClassList.remove('visible');
  } else {
    errorClassList.add('visible');
  }
}

export function freeAllInput() {
  const inputs = document.querySelectorAll('input');
  inputs.forEach((elem) => {
    elem.textContent = '';
    elem.value = '';
  });
}

export function validateOnSubmit(
  route: string,
  validator: (value: string, key: string) => boolean,
) {
  const validity = Object.entries(window.entranceForm)
    .every(([key, value]) => {
      const field = key.split('_')
        .pop();
      const isValid = validator(value, field);
      return isValid;
    });
  console.log(window.entranceForm);
  if (!validity) {
    console.error('Invalid data in form fields');
  } else {
    window.entranceForm = {};
    freeAllInput();
    pseudoRouter(route);
  }
}

export function saveGlobalForm(field, value) {
  if (value) {
    window.entranceForm[field] = value;
  }
}

export function initFormFields(fields) {
  fields.forEach((elem) => {
    window.entranceForm[elem] = '';
  });
}
