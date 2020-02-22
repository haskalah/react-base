import React from 'react';

import {withFirebase} from '../Context/FirebaseContext';

import {Menu} from 'semantic-ui-react';

const SignOutButton = ({ firebase }) => (
  <Menu.Menu position="right">
    <Menu.Item name="Logout" onClick={firebase.doSignOut} />
  </Menu.Menu>
);

export default withFirebase(SignOutButton);
