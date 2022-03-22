import { Profile } from './Profile';
import { withStore } from '../../utils/Components/Store';

// @ts-ignore
// super useless в моей архитектуре.
const withUser = withStore((state) => {
  const {avatar, display_name, id, ...fields } = state.currentUser;
  const newFields = {}
  Object.entries(fields).forEach(([key, value]) => {
    newFields[makeTitle(key)] = makePlaceHolder(key, value);
  });
  return {avatar, display_name, id, ...newFields};
});

function makeTitle(key) {
  return key.split('_')
    .map((value) => value[0].toUpperCase() + value.slice(1))
    .join(' ');
}

function makePrettyPhone(value) {
  let cleaned = ('' + value).replace(/\D/g, '');
  let match = cleaned.match(/^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`
  }
  return null;
}

function makePlaceHolder(key, value) {
  return key === 'phone' ? makePrettyPhone(value) : value;
}

export default withUser(Profile);
