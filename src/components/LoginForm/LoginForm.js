// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

    
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames/bind';

import { withAuth } from '../../context/Auth';

import styles from './LoginForm.module.css';

export class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInput = evt => {
    const {
      target: { name, value }
    } = evt;

    this.setState({
      [name]: value
    });
  };

  handleClick = evt => {
    const { authorize } = this.props;
    const { email, password } = this.state;

    authorize(email, password);
  };

  render() {
    const { isAuthorized, authError } = this.props;
    const { email, password } = this.state;

    if (isAuthorized) {
      return <Redirect to="/app" />;
    }

    return (
      <div className={styles.bg}>
        <div className={classNames(styles.form, 't-form')}>
          <p>
            <label htmlFor="email">
              <span className={styles.labelText}>Почта</span>
            </label>
            <input
              type="text"
              className={classNames(styles.input, 't-input-email')}
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </p>
          <p>
            <label htmlFor="password">
              <span className={styles.labelText}>Пароль</span>
            </label>
            <input
              type="password"
              className={classNames(styles.input, 't-input-password')}
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </p>
          {authError && (
            <p className={styles.error}>Почта или пароль не верные</p>
          )}
          <div className={styles.buttons}>
            <button
              className={classNames(styles.button, 't-login')}
              onClick={this.handleClick}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(LoginForm);