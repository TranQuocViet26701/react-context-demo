import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './BookList.module.scss';

export interface BookListProps {}

export default function BookList(props: BookListProps) {
  const themeContext = useContext(ThemeContext);
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className={styles.bookList}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
