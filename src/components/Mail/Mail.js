// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';

import styles from './Mail.module.css';

export default function Mail({ from, to, body }) {
  const direction = from ? (
    <p className="t-mail-from">
      From: <b>{from}</b>
    </p>
  ) : (
    <p className="t-mail-to">
      To: <b>{to}</b>
    </p>
  );

  return (
    <div className={styles.container}>
      {direction}
      <p className="t-mail-body">{body}</p>
    </div>
  );
}