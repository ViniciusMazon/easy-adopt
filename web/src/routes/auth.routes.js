import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from '../pages/Main';
import SingIn from '../pages/SingIn';
import AccessCode from '../pages/SingUp/AccessCode';
import Collaborator from '../pages/SingUp/Collaborator';
import Address from '../pages/SingUp/Address';
import Credentials from '../pages/SingUp/Credentials';
import ResetPassword from '../pages/ResetPassword';
import RedefinePassword from '../pages/RedefinePassword';
import DonationSuccess from '../pages/DonationSuccess';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/sing-in" component={SingIn} />
        <Route path="/singup-access-code" component={AccessCode} />
        <Route path="/singup-collaborator" component={Collaborator} />
        <Route path="/singup-address" component={Address} />
        <Route path="/singup-credentials" component={Credentials} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route
          path="/redefine-password/:role/:email/:token"
          component={RedefinePassword}
        />
        <Route path="/donation-success/:id" component={DonationSuccess} />
      </Switch>
    </BrowserRouter>
  );
}
