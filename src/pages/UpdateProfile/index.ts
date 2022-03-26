import { UpdateProfile } from './UpdateProfile';
import { withStore } from '../../utils/Components/Store';
import { withUser } from '../Profile';

// @ts-ignore
const withProfile = withStore((state) => state.currentUser);


export default withProfile(UpdateProfile);

// export default withUser(UpdateProfile);
