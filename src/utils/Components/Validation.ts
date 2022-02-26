// TODO: rethink idea, apply validation on every field in List automatically

import { pseudoRouter } from './PseudoRouter';

const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function checkEmail(value: string): boolean {
  return emailRegEx.test(value);
}

const passwordRegEx = new RegExp('^.*(?=.{8,40})(?=.*[A-Z])(?=.*[0-9]).*$');
function checkPassword(value: string): boolean {
  return passwordRegEx.test(value);
}

const loginRegEx = new RegExp('^.*(?=.{3,20})(?=.*[a-zA-Z])'
    + '(?:, (?=.*[0-9]))?(?!.*[/$"\'$#@!. %^&*()+=]).*$');
function checkLogin(value: string): boolean {
  return loginRegEx.test(value);
}

const phoneRegEx = new RegExp('^((\\+[1-9]|([0-9])){10,15})$');
function checkPhone(value: string): boolean {
  return phoneRegEx.test(value);
}

const nameRegEx = new RegExp('^([A-Z]|[А-Я]){1,}(?=.*[a-zA-Zа-яА-Я])'
    + '(?!.*[/$"\'#@!. %^&*()+=_])(?!.*[0-9])');
function checkName(value: string): boolean {
  return nameRegEx.test(value);
}

// TODO: make custom function for validation
// const message = new RegExp('^.*(?=.+)');

export function checkFieldValidity() {
  let isValid: boolean;
  let pass: string = '';
  return function (value: string, field: string): boolean {
    switch (field.toLowerCase()) {
      case 'email': {
        isValid = checkEmail(value);
        break;
      }
      case 'password': {
        isValid = checkPassword(value);
        pass = value;
        break;
      }
      case 'confirm': {
        isValid = checkPassword(value) && value === pass;
        break;
      }
      case 'login': {
        isValid = checkLogin(value);
        break;
      }
      case 'phone': {
        isValid = checkPhone(value);
        break;
      }
      case 'name': {
        isValid = checkName(value);
        break;
      }
      default: return false;
    }
    return isValid;
  };
}

export const validator = checkFieldValidity();

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

export function validation(
  parent: any,
  value: string,
  field: string,
  callback: (arg1: string, arg2: string) => boolean,
) {
  const isValid = callback(value, field);
  const errorMessageContainer = getDomElement(parent, '.login__input-error');
  toggleErrorClass(isValid, errorMessageContainer);
}

function makeFieldNameFromKey(key: string): string {
  const array: string[] = key.split('_');
  return array[array.length - 1].trim();

  // key.slice(key.indexOf('_'), key.length).trim();
}

function finalCheck(data: Record<string, string>) {
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

export function outputData(route: string) {
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
  isValid = isValid ? finalCheck({ ...result }) : isValid;

  if (isValid) {
    pseudoRouter(route);
  } else {
    console.error('Invalid data in form');
  }
}
