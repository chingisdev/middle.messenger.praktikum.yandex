import { renderDOM } from './utils/Components/renderDOM';
import Login from './pages/Login/Login';
import { ROOT_PATH } from './utils/constants/enviroment';

document.addEventListener('DOMContentLoaded', () => {
  const page = new Login();
  renderDOM(ROOT_PATH, page);
});
