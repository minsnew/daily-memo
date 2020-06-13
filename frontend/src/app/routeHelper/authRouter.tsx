import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

// interface for auth router
interface IAuthRouter extends RouteProps {
  redirectURL: string;
  isAuthenticated: boolean;
}

// router paths
export const routerPath = {
  DEFAULT: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  FORGOTPASSWORD: '/forgotpw',
  MEMO: '/memo'
}

// auth router component
export const AuthRouter: React.FC<IAuthRouter> = (props) => {
  const { isAuthenticated, redirectURL, component, ...others } = props;
  if (isAuthenticated) {
    return(
      <Route {...others} component={component} />
    );
  }

  return <Redirect to={redirectURL} />;
}