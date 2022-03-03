// TODO: rethink idea, apply validation on every field in List automatically

import { pseudoRouter } from './PseudoRouter';
import {
  EMAIL_REGEX,
  LOGIN_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX
} from '../constants/enviroment';

// TODO: make custom function for validation
// const message = new RegExp('^.*(?=.+)');

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
          isValid = isValid && pass === confirmPass;
        }
        break;
      }
      case 'confirm': {
        isValid = PASSWORD_REGEX.test(value) && value === pass;
        confirmPass = value;
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

export function validation(event, partialClass, field, validator) {
  const insertedValue = event.currentTarget.value;
  let fieldNode = event.target;
  let nodeClasses = fieldNode.classList;
  while (!nodeClasses.contains(partialClass)) {
    fieldNode = fieldNode.parentElement;
    nodeClasses = fieldNode.classList;
  }
  const isValid = validator(insertedValue, field);
  const errorClassList = fieldNode.querySelector('span').classList;
  isValid ? errorClassList.remove('visible') : errorClassList.add('visible');
}

export function validateOnSubmit(route: string, validator: (value: string, key: string) => boolean) {
  const validity = Object.entries(window.entranceForm)
    .every(([key, value]) => validator(value, key.split('_').pop()));
  console.log(window.entranceForm);
  if (!validity) {
    console.error('Invalid data in login form');
  } else {
    window.entranceForm = {};
    pseudoRouter(route);
  }
}

export function saveGlobalForm(field, value) {
  if (value) {
    window.entranceForm[field] = value;
  }
}

export function initFormFields(fields) {
  fields.forEach(elem => window.entranceForm[elem] = '');
}
