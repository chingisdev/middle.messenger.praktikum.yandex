import { buttonMarkup } from "./button.tmpl";
import Handlebars from "handlebars";
import style from './style.less';

const buttonConfig = {
    buttonClassName: 'button-confirm',
    textClassName: '',
    buttonText: 'example',
}

const templator = Handlebars.compile(buttonMarkup);
export const button = templator(buttonConfig);

console.log(button);


