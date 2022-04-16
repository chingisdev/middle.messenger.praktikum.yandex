import {
  EMAIL_REGEX,
  LOGIN_REGEX,
  NAME_REGEX,
  PASSWORD_REGEX,
  PHONE_REGEX,
} from '../utils/constants/environment';
import { router } from './Router';
// import { pseudoRouter } from './PseudoRouter';

export function validator(value: string, field: string): boolean {
  const checkWord = field.split(/[\s_,]+/).pop().toLowerCase();
    switch (checkWord) {
      case 'email': {
        return EMAIL_REGEX.test(value);
      }
      case 'password': {
        return PASSWORD_REGEX.test(value);
      }
      case 'old': {
        return PASSWORD_REGEX.test(value);
      }
      case 'confirm': {
        return PASSWORD_REGEX.test(value);
      }
      case 'login': {
        return LOGIN_REGEX.test(value);
      }
      case 'phone': {
        return PHONE_REGEX.test(value);
      }
      case 'name': {
        return NAME_REGEX.test(value);
      }
      case 'chat': {
        return true;
      }
      default:
        return false;
    }
}

export function makeEmpty(target) {
  target.value = '';
}

export function validation(event, partialClass, fieldName, validator) {
  // debugger;
  const insertedValue = event.currentTarget.value;
  let fieldNode = event.target;
  let nodeClasses = fieldNode.classList;
  while (!nodeClasses.contains(partialClass)) {
    fieldNode = fieldNode.parentElement;
    nodeClasses = fieldNode.classList;
  }
  const isValid = insertedValue ? validator(insertedValue, fieldName) : false;
  const errorClassList = fieldNode.querySelector('span').classList;
  if (isValid || !(isValid || insertedValue)) {
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

export function onSubmitValidation(
  data: Record<string, any>,
  validator: (value: string, key: string) => boolean,
): boolean {
  return Object.entries(data)
    .every(([key, value]) => validator(value, key));
}

export function saveGlobalForm(field, value) {
  const key = field.replaceAll(' ', '_').toLowerCase();
  if (value || value === '') {
    window.entranceForm[key] = value;
  }
}

export function initFormFields(fields) {
  fields.forEach((elem) => {
    window.entranceForm[elem] = '';
  });
}
