import Button from '../../components/Button/Button';
import Iterable from '../../components/Iterable/Iterable';
import Block from '../Components/Block';
import List from '../../components/List';

export interface IMessage {
    positionClass: string,
    backgroundClass: string,
    date: string,
    message: string,
}

export interface IForm {
    fields: List,
    submit: Button,
    redirect: Button,
    events?: Record<string, (event) => void>,
}

export interface IList {
    class: string,
    list: Iterable,
}

export interface IProfileField {
    name: string,
    content: string,
}

export interface IButton {
    name?: string,
    textClass?: string,
    textVisible?: string,
    buttonClass?: string,
    type?: string,
    arrowClass?: string,
    divVisible?: string,
    events?: Record<string, (event) => void>,
}

export interface ISendMessage {
    attach: Button,
    send: Button,
}

export interface IErrorPageMessage {
    code: string,
    message: string,
}

export interface IEntranceField {
    name: string,
    title: string,
    input: Block,
}

export interface IInput {
    name: string,
    type: string,
    minLength: string,
    events?: Record<string, (event) => void>
}

export interface IName {
    name: string;
}

export interface ISearch {
    searchClass: string,
    events?: Record<string, (event) => void>
}

export interface IChat {
    name: string,
    lastMessage: string,
    lastMessageTime: string,
    unreadQuantity: number | string,
    avatar?: string,
    messages?: IMessage[];
    events?: Record<string, (event) => void>,
}

export interface IDate {
    date: string,
}

export interface IHeader {
    name: string,
    button: Button,

}
