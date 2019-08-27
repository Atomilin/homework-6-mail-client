// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React, { Component } from 'react';
import {NavLink, Route, Switch} from "react-router-dom";

import styles from "./AppRouter.module.css";
import Home from "../Home"
import InboxList from "../InboxList";
import OutboxList from "../OutboxList";
import InboxMail from "../InboxMail";
import OutboxMail from "../OutboxMail";

const views = [
    {
      name: 'home',
      path: '/app',
      component: Home
    },
    {
      name: 'inbox',
      path: '/app/inbox',
      component: InboxList
    },
    {
      name: 'outbox',
      path: '/app/outbox',
      component: OutboxList
    }
  ];
  
  function Title(props) {
    const {
      match: {
        params: { view }
      }
    } = props;
  
    return (
      <h3 className={`${styles.title} ${styles.capitalize}`}>
        {view ? view : 'Home'}
      </h3>
    );
  }
  
  export default class AppRouter extends Component {
    render() {
      return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <nav className={styles.nav}>
              <ul className={`${styles.navList} t-nav-list`}>
                {views.map(({ name, path }) => (
                  <li className={styles.navElement} key={name}>
                    <NavLink
                      exact
                      to={path}
                      className={`t-link-${name} ${styles.link} ${
                        styles.capitalize
                      }`}
                      activeClassName="active"
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.content}>
              <Route path="/app/:view?" component={Title} />
              <Switch>
                {views.map(({ name, path, component }) => (
                  <Route exact key={name} path={path} component={component} />
                ))}
                <Route path="/app/inbox/:id" component={InboxMail} />
                <Route path="/app/outbox/:id" component={OutboxMail} />
              </Switch>
            </div>
          </div>
        </div>
      );
    }
  }