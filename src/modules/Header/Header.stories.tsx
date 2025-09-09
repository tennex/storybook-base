import { fn } from 'storybook/test';

import { Header } from './Header';

const meta = {
  args: {
    onCreateAccount: fn(),
    onLogin: fn(),
    onLogout: fn(),
  },
  component: Header,
};

export default meta;

export const LoggedIn = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut = {};
