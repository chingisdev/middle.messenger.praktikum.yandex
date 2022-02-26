import Login from '../../pages/Login/Login';
import { renderDOM } from './renderDOM';
import Register from '../../pages/Register/Register';
import Chat from '../../pages/Chat/Chat';
import Profile from '../../pages/Profile/Profile';
import ServerError from '../../pages/Error/ServerError';
import NotFound from '../../pages/Error/NotFound';
import { rootPath } from '../constants/enviroment';

// TODO: в какой момент удалять слушатели, изучить
export function pseudoRouter(path: string) {
  switch (path.toLowerCase()) {
    case 'login': {
      const page = new Login();
      renderDOM(rootPath, page);
      return;
    }
    case 'register': {
      const page = new Register();
      renderDOM(rootPath, page);
      return;
    }
    case 'chat': {
      const page = new Chat();
      renderDOM(rootPath, page);
      const elem = document.querySelector('.discussion__scroll');
      elem.scrollTop = elem.scrollHeight;
      return;
    }
    case 'profile': {
      const page = new Profile();
      renderDOM(rootPath, page);
      return;
    }
    case 'notfound': {
      const page = new NotFound();
      renderDOM(rootPath, page);
      return;
    }
    case 'servererror': {
      const page = new ServerError();
      renderDOM(rootPath, page);
      return;
    }
    default: {
      const page = new Login();
      renderDOM(rootPath, page);
    }
  }
}
