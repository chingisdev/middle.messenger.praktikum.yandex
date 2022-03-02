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
  let isValid: boolean;
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
      default: return false;
    }
    return isValid;
  };
}

function toggleErrorClass(isValid: boolean, errorMessageContainer) {
  if (!isValid) {
    errorMessageContainer.classList.add('visible');
  } else {
    errorMessageContainer.classList.remove('visible');
  }
}

function getDomElement(rootNode, selector: string) {
  return rootNode.querySelector(selector);
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

/*export function validation(
  parent: HTMLElement,
  value: string,
  field: string,
  callback: (arg1: string, arg2: string) => boolean,
) {
  const isValid = callback(value, field);
  const errorMessageContainer = getDomElement(parent, '.login__input-error');
  toggleErrorClass(isValid, errorMessageContainer);
}*/

function makeFieldNameFromKey(key: string): string {
  const keyParts: string[] = key.split('_');
  return keyParts.pop().trim();

  // key.slice(key.indexOf('_'), key.length).trim();
}

const validator = createPatternValidator();

function checkFormData(data: Record<string, string>) {
  let isValid = false;
  Object.entries(data).forEach(([key, value]) => {
    const newKey = makeFieldNameFromKey(key);
    isValid = validator(value, newKey);
    if (!isValid) {
      return false;
    }
  });
  return isValid;
}

export function logUserInput(route: string) {
  const elements = document.querySelectorAll('.login__input');
  const result = {};
  elements.forEach((elem: any) => {
    const name = elem.getAttribute('name');
    if (elem.value !== '') {
      result[name] = elem.value;
    }
  });
  console.log(result);
  let isValid = Object.keys(result).length === elements.length;
  isValid = isValid ? checkFormData({ ...result }) : isValid;

  if (isValid) {
    pseudoRouter(route);
  } else {
    console.error('Invalid data in form');
  }
}
