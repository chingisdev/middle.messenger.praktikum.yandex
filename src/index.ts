import { renderDOM } from './utils/Components/renderDOM';
import Login from './pages/Login/Login';
import { ROOT_PATH } from './utils/constants/enviroment';
import ProfileUpdateUserInfo from './pages/ProfileUpdateUserInfo/ProfileUpdateUserInfo';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

window['entranceForm'] = {};

document.addEventListener('DOMContentLoaded', () => {
  // const page = new Login();
  const page = new Profile();
  renderDOM(ROOT_PATH, page);
});
