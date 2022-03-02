import { renderDOM } from './utils/Components/renderDOM';
import Login from './pages/Login/Login';
import { ROOT_PATH } from './utils/constants/enviroment';
import ProfileUpdateUserInfo from './pages/ProfileUpdateUserInfo/ProfileUpdateUserInfo';
import Profile from './pages/Profile/Profile';

document.addEventListener('DOMContentLoaded', () => {
  // const page = new ProfileUpdateUserInfo();
  const page = new Login();
  renderDOM(ROOT_PATH, page);
});
