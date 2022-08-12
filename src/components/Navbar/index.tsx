import React from 'react';

import styles from './Navbar.module.scss';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
