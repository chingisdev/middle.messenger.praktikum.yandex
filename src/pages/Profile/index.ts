import { Profile } from './Profile';
import { withStore } from '../../utils/Components/Store';

// @ts-ignore
// super useless в моей архитектуре.
const withUser = withStore((state) => state.currentUser);

export default withUser(Profile);
