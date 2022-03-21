import { router } from './utils/Components/Router';

declare global {
  interface Window {
    entranceForm: Record<string, string>;
  }
}

window.entranceForm = {};

document.addEventListener('DOMContentLoaded', () => {
  router.start();
  router.go('/');
});
