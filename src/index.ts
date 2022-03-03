import { renderDOM } from './utils/Components/renderDOM';
import Login from './pages/Login/Login';
import { ROOT_PATH } from './utils/constants/enviroment';
import UpdateProfile from './pages/ProfileControls/UpdateProfile';
import Profile from './pages/Profile/Profile';
import Chat from './pages/Chat/Chat';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new Login();
  renderDOM(ROOT_PATH, page);
});
