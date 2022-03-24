import { Profile } from './Profile';
import { withStore } from '../../utils/Components/Store';

// @ts-ignore
// super useless в моей архитектуре.
export const withUser = withStore((state) => {
  if (!state.currentUser) {
    return;
  }
  return state.currentUser;
});

export default withUser(Profile);
