import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { AuthRouter, routerPath } from "./routeHelper/authRouter";
import SignInPage from '../pages/login/signInPage';
import SignUpPage from '../pages/login/signUpPage';
import ForgotPassword from '../pages/login/forgotPasswordPage';
import MemoPage from '../pages/memo/memoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routerPath.SIGNIN} component={SignInPage} />
        <Route path={routerPath.SIGNUP} component={SignUpPage} />
        <Route path={routerPath.FORGOTPASSWORD} component={ForgotPassword} />
        <AuthRouter
          path={routerPath.MEMO}
          redirectURL={routerPath.SIGNIN}
          isAuthenticated={true}
          component={MemoPage}
        />
        <Redirect from={routerPath.DEFAULT} to={routerPath.SIGNIN} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
