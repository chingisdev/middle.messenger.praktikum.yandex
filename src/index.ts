import { RedirectButton } from "../src/components/Buttons/RedirectButton";
import { renderDOM } from "../src/utils/renderDOM";

document.addEventListener('DOMContenLoaded', () => {
    const button = new RedirectButton({
            buttonClass: 'login__redirect',
            link: '',
            linkClass: 'login__link login__link_redir',
            name: 'Back to chats',
            type: '',
            events: {
                click: () => console.log('redirect to chats'),
            },
        });

    renderDOM('#app', button);
});