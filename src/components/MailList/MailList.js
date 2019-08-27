// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MailList.module.css';

export default function MailList({ name, items }) {
  return (
    <div className={`${styles.container} t-${name}-list`}>
      {items.map(({ id, body }) => (
        <Link key={id} className={styles.link} to={`/app/${name}/${id}`}>
          {body.slice(0, 52) + '...'}
        </Link>
      ))}
    </div>
  );
}