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
    const user = await AuthController.fetchUser();
    console.log('user', user);
    if (!user) {
      throw new Error('User is not here');
    }
    path = '/test';
  } catch (err) {
    console.log(err, err.reason, '/ Error fetching user');
  }
  console.log(path);
  router.start();
  router.go(path);
});
