import { router } from './utils/Components/Router';
import AuthController from './controllers/AuthController';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

window.entranceForm = {};

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await AuthController.fetchUser();
  } catch (err) {
    console.log(err.message, 'Error fetching user');
  }

  // router.go('/');
  router.start();
});
