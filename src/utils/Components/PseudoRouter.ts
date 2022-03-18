

// TODO: в какой момент удалять слушатели, изучить
import ChangePassword from '../../pages/ChangePass';
import UpdateProfile from '../../pages/UpdateProfile';
import Register from '../../pages/Register';
import ServerError from '../../pages/ServerError';
import Chat from '../../pages/Chat/Chat';
import { ROOT_PATH } from '../constants/environment';
import { renderDOM } from './renderDOM';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile';
import NotFound from '../../pages/NotFoundErr';

export function pseudoRouter(path: string) {
  switch (path.toLowerCase()) {
    case 'login': {
      const page = new Login();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'register': {
      const page = new Register();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'chat': {
      const page = new Chat();
      renderDOM(ROOT_PATH, page);
      const elem = document.querySelector('.discussion__list_wrapper');
      elem.scrollTop = elem.scrollHeight;
      return;
    }
    case 'profile': {
      const page = new Profile();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'update': {
      const page = new UpdateProfile();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'change': {
      const page = new ChangePassword();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'notfound': {
      const page = new NotFound();
      renderDOM(ROOT_PATH, page);
      return;
    }
    case 'servererror': {
      const page = new ServerError();
      renderDOM(ROOT_PATH, page);
      return;
    }
    default: {
      const page = new NotFound();
      renderDOM(ROOT_PATH, page);
    }
  }
}
