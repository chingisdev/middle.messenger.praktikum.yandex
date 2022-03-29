export const ROOT_PATH = '#app';

export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum LifecycleEvents {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render',
}

export const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX = new RegExp('^.*(?=.{8,40})(?=.*[A-Z])(?=.*[0-9]).*$');
export const LOGIN_REGEX = new RegExp('^.*(?=.{3,20})(?=.*[a-zA-Z])'
  + '(?:, (?=.*[0-9]))?(?!.*[/$"\'$#@!. %^&*()+=]).*$');
export const PHONE_REGEX = new RegExp('^((\\+[1-9]|([0-9])){10,15})$');
export const NAME_REGEX = new RegExp('^([A-Z]|[А-Я]){1,}(?=.*[a-zA-Zа-яА-Я])'
  + '(?!.*[/$"\'#@!. %^&*()+=_])(?!.*[0-9])');
