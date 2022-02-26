import { renderDOM } from './utils/Components/renderDOM';
import Login from './pages/Login/Login';
import { rootPath } from './utils/constants/enviroment';

document.addEventListener('DOMContentLoaded', () => {
  const page = new Login();
  renderDOM(rootPath, page);
});
