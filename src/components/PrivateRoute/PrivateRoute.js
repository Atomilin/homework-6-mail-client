import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.

  function PrivateRoute(props) {
    const { isAuthorized, loginPath, component, path, ...rest } = props;
  
    if (isAuthorized) {
      return <Route path={path} component={component} {...rest} />;
    }
  
    return <Redirect to={loginPath} />;
  }
  
  export default withAuth(PrivateRoute);
