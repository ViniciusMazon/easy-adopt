import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import AccessCode from '../pages/SingUp/AccessCode';
import Collaborator from '../pages/SingUp/Collaborator';
import Address from '../pages/SingUp/Address';
import Credentials from '../pages/SingUp/Credentials';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SingIn} />
        <Route path="/singup-access-code" component={AccessCode} />
        <Route path="/singup-collaborator" component={Collaborator} />
        <Route path="/singup-address" component={Address} />
        <Route path="/singup-credentials" component={Credentials} />
      </Switch>
    </BrowserRouter>
  );
}
