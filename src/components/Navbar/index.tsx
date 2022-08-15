import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;

  return (
    <nav
      className={styles.navBar}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
