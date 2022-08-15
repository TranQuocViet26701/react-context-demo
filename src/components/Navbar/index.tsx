import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;

  return (
    <nav
      className={styles.navBar}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <div className={styles.rowHeader}>
        <h1>Book store</h1>
        <span style={{ borderColor: theme.syntax }}>
          {isAuthenticated ? 'Logged in' : 'Logged out'}
        </span>
      </div>
      <ul>
        <li className={styles.active}>Design</li>
        <li>Detective</li>
        <li>Scientific</li>
      </ul>
    </nav>
  );
}
