import { router } from './utils/Components/Router';
import AuthController from './controllers/AuthController';
import store from './utils/Components/Store';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

window.entranceForm = {};
//todo: change redirect to chats
document.addEventListener('DOMContentLoaded', async () => {
  let path = '/';
  try {
    await AuthController.fetchUser();
    path = '/update';
  } catch (err) {
    console.log(err, err.reason, '/ Error fetching user');
  }
  console.log(path);
  router.start();
  router.go(path);
});
