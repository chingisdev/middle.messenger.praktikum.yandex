import { IInput } from './interfaces';
import { validation, validator } from '../Components/Validation';

export const inputEmailAttr: IInput = {
  type: 'email',
  minLength: '2',
  name: 'email',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'email', validator);
    },
  },
};

export const inputLoginAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'login',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'login', validator);
    },
  },
};

export const inputPassAttr: IInput = {
  type: 'password',
  minLength: '4',
  name: 'password',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'password', validator);
    },
  },
};

export const inputConfirmPassAttr: IInput = {
  type: 'password',
  minLength: '4',
  name: 'confirm_password',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'confirm', validator);
    },
  },
};

export const inputFirstNameAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'first_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
};

export const inputSecondNameAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'second_name',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'name', validator);
    },
  },
};

export const inputPhoneAttr: IInput = {
  type: 'text',
  minLength: '2',
  name: 'phone',
  events: {
    blur: (event) => {
      validation(event.path[1], event.currentTarget.value, 'phone', validator);
    },
  },
};
