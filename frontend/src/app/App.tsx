import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import LoginPage from "../pages/login/loginPage";
import MemoPage from "../pages/memo/memoPage";
import './App.css';

const App : React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/memo" component={MemoPage} />
      <Redirect from={"*"} to={"/login"} />
    </Switch>
  </BrowserRouter>
)

export default App;
