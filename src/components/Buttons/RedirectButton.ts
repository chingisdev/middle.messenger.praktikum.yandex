
// {
//     buttonClass: 'login__redirect',
//     link: '',
//     linkClass: 'login__link login__link_redir',
//     name: 'Back to chats',
//     type: '',
//     events: {
//         click: () => console.log('redirect to chats');
//     },
// }

import { Block } from "../../utils/Block";

interface IRedirectButtonProps {
    buttonClass: string,
    link?: string,
    linkClass: string,
    name: string,
    type?: string,
    events: any,
}

export class RedirectButton extends Block {
    constructor(props: IRedirectButtonProps) {
        super('button', props);
    }

    render(): string {
        return this.props.name;
    }
}